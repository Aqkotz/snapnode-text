import React from "react";
import Node from "./Node";

export default class NodeEditor extends React.Component {
  state = {
    nodeData: [
      { id: 1, name: "Text1" },
      { id: 2, name: "Text2" },
    ],
    nodes: [],
  };

  constructor(props) {
    super();
  }

  removeNodePure = (nodes, id) => {
    let tempNodes = [];
    nodes.forEach((node) => {
      if (node.idNum !== id) {
        tempNodes.push(node);
      }
    });
    return tempNodes;
  };

  registerNode = (node) => {
    const tempNodes = this.state.nodes;
    tempNodes.push(node);
    this.setState({ nodes: tempNodes });
  };

  getNodes = () => {
    return this.state.nodes;
  };

  render() {
    return (
      <div id="nodeEditor">
        {this.state.nodeData.map((node) => (
          <Node name={node.name} idNum={node.id} editor={this} key={node.id} />
        ))}
      </div>
    );
  }
}
