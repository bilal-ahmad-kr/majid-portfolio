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

const dirsToFix = ['src/components/sections', 'src/components/services'];
for (const dir of dirsToFix) {
    if (fs.existsSync(dir)) {
        for (const file of fs.readdirSync(dir)) {
            if (file.endsWith('.jsx')) {
                replaceInFile(path.join(dir, file), [
                    ['"../data/content"', '"../../data/content"'],
                    ["'../data/content'", "'../../data/content'"],
                    ['"../data/servicesContent"', '"../../data/servicesContent"'],
                    ["'../data/servicesContent'", "'../../data/servicesContent'"]
                ]);
            }
        }
    }
}

const uiDir = 'src/components/ui';
if (fs.existsSync(uiDir)) {
    for (const file of fs.readdirSync(uiDir)) {
        if (file.endsWith('.jsx')) {
            replaceInFile(path.join(uiDir, file), [
                ['"./ui/Shared"', '"./Shared"']
            ]);
        }
    }
}

