function customReact(reactElement, container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}



// const mainContainer = document.querySelector('#root')

// const myElement = React.createElement

const reactElement ={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
        // children:'Click me to visit GOOGLE.'
    },
    
    children:'Click me to visit GOOGLE.'
    

}
const mainContainer = document.querySelector('#root')

// const myElement = React.createElement(
//     reactElement.type,
//     reactElement.props,
//     reactElement.props.children
// )

customRender(reactElement , mainContainer)