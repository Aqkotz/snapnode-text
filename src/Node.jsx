import React from "react";
import Draggable from "react-draggable";

export default class Node extends React.Component {
  state = {
    styles: {},
    requiredInputs: [{ data: {} }, { data: [] }],
    inputNodes: [],
    outputNode: {},
    generateOutput: () => {},
  };

  constructor(props) {
    super();
    this.name = props.name;
    this.idNum = props.idNum;
    this.editor = props.editor;
  }

  getInputs = () => {
    let tempVals = [];
    this.state.inputNodes.forEach((node) => {
      tempVals.push(node.state.generateOutput());
    });
    return tempVals;
  };

  componentDidMount = () => {
    this.editor.registerNode(this);
  };

  getInputSlotElmt = () => {
    return document.getElementById("input" + this.idNum);
  };

  getOutputSlotElmt = () => {
    return document.getElementById("output" + this.idNum);
  };

  findSnaps = () => {
    const nodes = this.editor.removeNodePure(
      this.editor.getNodes(),
      this.idNum
    );
    let outputLoc = this.getOutputSlotElmt().getBoundingClientRect();
    let resultNode = {};
    nodes.forEach((node) => {
      let inputLoc = node.getInputSlotElmt().getBoundingClientRect();
      let distance = Math.sqrt(
        Math.pow(outputLoc.top - inputLoc.top, 2) +
          Math.pow(outputLoc.left - inputLoc.left, 2)
      );
      console.log(distance);
      if (distance < 3) {
        console.log(node);
        resultNode = node;
      }
    });
    console.log(resultNode);
    return resultNode;
  };

  checkSnap = () => {
    let node = this.findSnaps();
    console.log(node);
    if (node !== undefined) {
      const el = node.getInputSlotElmt().getBoundingClientRect();
      this.setState({
        styles: { position: "absolute", top: el.top, left: el.left },
      });
    } else {
      this.setState({ styles: {} });
    }
  };

  render() {
    return (
      <Draggable onDrag={this.checkSnap}>
        <div className="mydiv" styles={this.state.styles}>
          <div className="c" id={"output" + this.idNum}></div>
          <div className="b" id={"input" + this.idNum}></div>
          <div className="node-inner node">
            <h4 id="nodeTitle" className="nodeSection">
              {this.name}
            </h4>
            <textarea className="nodeSection" />
          </div>
        </div>
      </Draggable>
    );
  }
}
