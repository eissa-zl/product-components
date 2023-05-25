# 📱[LIBRARY NAME]
Build React native apps with blazingly fast speed with help of our custom library components. Ready-To-Use components with default styles and extreme customizability. Get started just by installing and importing it directly to your project.

# 🤖 Features 
-  <b>Ease to use</b>, the components can be used by installing and importing with least amount of code needed to get it running.
-  <b>Ease to customize </b>, We provide complete independence in terms of customization and styling.
- <b>Minimum dependencies</b>, and no large bundle size.
- <b>Default Themes </b>to choose from.
- Many components have <b>dark mode</b> compatible

# 🎉Installation
To use [LIBRARY NAME] components, you just need to install the product-components package and its peer dependencies:

`
$ npm i https://github.com/eissa-zl/product-components.git  <br>
$ yarn i https://github.com/eissa-zl/product-components.git
`
# 🚀Usage

<h2>🎯 General usage -</h2>
To use the component we can simply import the component from <b>[LIBRARY NAME]</b> package.
` import { TextInputComponent } from  'product-components' `

E.g.  To use the Input Component. We just import it and pass the required props.

`<TextInputComponent  
value={inputvalue}  
onChange={(text) =>  setinputvalue(text)}  
placeholder={'Enter Your Name'}  
placeholderTextColor="brown"
/>`

<b>[INSERT IMAGE HERE]</b>



<h2>🎨 Custom Styling a component -</h2>
The component can be styled just by passing the style object in style prop (eg : containerStyle, inputstyle and
labelstyle are props which can be used for styling the particular component)

We can change the border color of our component by passing object with styles in
`containerStyle={borderColor:'red'}`

Eg. 
`<TextInputComponent  
value={inputvalue}  
onChange={(text) =>  setinputvalue(text)}  
placeholder={'Enter Your Name'}  
placeholderTextColor="brown"
containerStyle={borderColor:'red'}
/>`
