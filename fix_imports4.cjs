const fs = require('fs');
const path = require('path');

function replaceInFile(p, replacements) {
    let content = fs.readFileSync(p, 'utf8');
    let changed = false;
    for (const [from, to] of replacements) {
        if (content.includes(from)) {
            content = content.split(from).join(to);
            changed = true;
        }
    }
    if (changed) {
        console.log('Updated ' + p);
        fs.writeFileSync(p, content, 'utf8');
    }
}

const uiDir = 'src/components/ui';
if (fs.existsSync(uiDir)) {
    for (const file of fs.readdirSync(uiDir)) {
        if (file.endsWith('.jsx')) {
            replaceInFile(path.join(uiDir, file), [
                ['"../data/content"', '"../../data/content"']
            ]);
        }
    }
}
