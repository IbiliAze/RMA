const { exec } = require('child_process');

const ssh = ({ host, username, password, command }) => {
  exec(`sshpass -p ${password} ssh ${username}@${host} ${command}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

module.exports = ssh;
