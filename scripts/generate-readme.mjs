import markdownMagic from 'markdown-magic';
import path from 'path';
import fs from 'fs';
import { markdownTable } from 'markdown-table';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const difficulty = {
  Hard: '🔴',
  Medium: '🟠',
  Easy: '🟢',
};
const markdownPath = path.resolve(__dirname, '../README.md');
const solutions = path.resolve(__dirname, '../solutions');

const config = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (SOLUTIONS) --> */
    SOLUTIONS() {
      const rows = [['Order', 'Solution', 'Difficulty', 'Source']];
      fs.readdirSync(solutions)
        .sort((a, b) => a.split('.')[0] - b.split('.')[0])
        .forEach(async (fileName) => {
          const order = fileName.split('.')[0];
          const filePath = path.join(solutions, fileName);
          const content = fs.readFileSync(filePath, 'utf8');

          const title = content
            .match(/(\[\d{1,}\].+)/)[0]
            .replace(/\[\d{1,}\] /, '');
          const d = difficulty[content.match(/Hard|Medium|Easy/)[0]];
          const url = content.match(/https:\/\/.+problems.+/)[0];

          rows.push([
            order,
            `[${title}](./solutions/${fileName})`,
            d,
            `[Leetcode 链接](${url})`,
          ]);
        });

      return markdownTable(rows, { align: ['c', 'l', 'c', 'l'] });
    },
  },
};

markdownMagic(markdownPath, config);
