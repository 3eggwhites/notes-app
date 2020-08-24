# NotesApp
It is simple note taking app built on Node.js which taken command line arguments to create notes.  
## App Function
Create, Read, Delete and List(Titles only)
Save notes in json format on filesystem.  
To run the app please follow the below steps:
- Perform a `git clone`
- navigate to the directory and do a `npm install` to install all the required node modules
- To add a note use the command `node app.js add --title='Note 1' --body='Body1'` this command will add a new note. Notes are saved in the same directory in notes.json file
- To removing a note use the command `node app.js remove --title='Note 1'
- To list all the available note title use the command `node app.js list`
- To read a note use the command `node app.js read --title='Note 1'`
## Packages Used
While developing the application I have used two npm packages. They are listed below:
- [chalk](https://www.npmjs.com/package/chalk)
- [yargs](https://www.npmjs.com/package/yargs)
# Credits
This note app built based on the Node.js course offered by Andrew Mead on Udemy 
