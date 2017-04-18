#	IMPORT COMPONENT

The import-task trigger multiple tasks due to different destination 
for the different files in the spacecraft-starter. To add a
component to your project, first install it and then run the 
import task to get the files into the project directory as follows:

``npm install --save-dev spacecomponent_<componentname>``

``gulp import --component <componentname>``

–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

To get the styles synked, remember to do the import!

``@import "views/<component>/<component>";``

in

src/scss/components/_components.main.scss

```
// Import tasks
requireDir('../import', { recurse: true })
``