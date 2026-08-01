import { useState, useEffect, useCallback } from "react";

/**
 * Wraps any service from lib/cms.js (projectsService, blogsService, etc.)
 * with loading/error state and optimistic-ish local updates.
 *
 * const { rows, loading, error, create, update, remove, refresh } =
 *   useCrudList(projectsService, { orderBy: "sort_order", ascending: true });
 */
export function useCrudList(service, options = {}) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const optionsStr = JSON.stringify(options);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await service.list(JSON.parse(optionsStr));
      setRows(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [service, optionsStr]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, [refresh]);

  const create = async (values) => {
    const row = await service.create(values);
    setRows((prev) => [row, ...prev]);
    return row;
  };

  const update = async (id, values) => {
    const row = await service.update(id, values);
    setRows((prev) => prev.map((r) => (r.id === id ? row : r)));
    return row;
  };

  const remove = async (id) => {
    await service.remove(id);
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return { rows, loading, error, create, update, remove, refresh };
}

/**
 * For single-record data: a page (Home/About) or a service detail row.
 * const { data, loading, save } = useCrudRecord(() => pagesService.get("home"),
 *                                                (values) => pagesService.update("home", values));
 */
export function useCrudRecord(fetcher, saver) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setData(await fetcher());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [fetcher]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, [refresh]);

  const save = async (values) => {
    const updated = await saver(values);
    setData(updated);
    return updated;
  };

  return { data, loading, error, save, refresh };
}