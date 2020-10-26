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

  //removes a node from a list by id
  removeNodePure = (nodes, id) => {
    let tempNodes = [];
    nodes.forEach((node) => {
      if (node.idNum !== id) {
        tempNodes.push(node);
      }
    });
    return tempNodes;
  };

  //adds a new node to NodeEditor's stored list
  registerNode = (node) => {
    const tempNodes = this.state.nodes;
    tempNodes.push(node);
    this.setState({ nodes: tempNodes });
  };

  //returns the list of nodes.
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
