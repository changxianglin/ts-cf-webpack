function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = 'Hello ' + 'webpack ' + 'typescript!'

  return element;
}

document.body.appendChild(component());


function Hello(name:string) {
  alert('Hello, ' + name + '!!!')
}

Hello('xianglin.zhang')