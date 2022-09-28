const markdownMagic = require('markdown-magic');
const path = require('path');
const fs = require('fs');

const markdownPath = path.resolve(__dirname, '../README.md');
const solutions = path.resolve(__dirname, '../solutions');

const config = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (SOLUTIONS) --> */
    SOLUTIONS(content) {
      fs.readdirSync(solutions).forEach((fileName) => {
        const order = fileName.split('.')[0];
        const filePath = path.join(solutions, fileName);
        const content = fs.readFileSync(filePath);

        console.log(order, content);
      });

      return `This will replace all the contents of inside the comment `;
    },
  },
};

markdownMagic(markdownPath, config);
