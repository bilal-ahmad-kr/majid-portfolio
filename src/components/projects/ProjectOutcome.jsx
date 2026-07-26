const ProjectOutcome = ({ outcome }) => {
  return (
    <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-5">
      <h4 className="text-lg font-semibold text-green-700">
        Outcome
      </h4>

      <p className="mt-2 leading-7 text-slate-700">
        {outcome}
      </p>
    </div>
  );
};

export default ProjectOutcome;