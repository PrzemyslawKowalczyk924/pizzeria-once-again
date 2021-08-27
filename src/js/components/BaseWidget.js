class BaseWidget {
  constructor(wrapperElement, initalValue){
    //wrapperElement = element dom, w którym znajduje się ten wrapper
    //initialValue = początkowa wartość widgetu
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.wrapper = wrapperElement;

    thisWidget.value = initalValue;
  }
}

export default BaseWidget;