const fileHelper = require('./file-helper.js');
const directory = 'data/';
const rectifiedDirectory = 'rectified/';

function rectifyOCRJson(filename, content) {
  content = JSON.parse(content);
  let rectified = [];
  for (let i = 0; i < content.length; i++) {
    rectified.push(content[i]);
    for (let h = 0; h < rectificationRules.length; h++) {
      const matchResult = content[i].chars.match(rectificationRules[h]);
      if (matchResult) {
        //Need to rectify last content value to be just label
        //1 will be the label capture
        content[i].chars = matchResult[1];

        let rectifiedContent = {
          left: content[i].left,
          top: content[i].top,
          width: content[i].width,
          height: content[i].height,
          //2 will be the value capture
          chars: matchResult[2]
        }
        rectified.push(rectifiedContent);

        //need to break because not allowed to use more than one rule on OCR capture
        break;
      }
    }
  }

  fileHelper.writeFile(rectifiedDirectory + filename, JSON.stringify(rectified));
}

//The contract of the rule is each regex should have two captures
//first capture for the label, second for the value
const rectificationRules = [/(invoice[\:\# ]*)([\d]+)/i];

fileHelper.readFiles(directory, rectifyOCRJson);
