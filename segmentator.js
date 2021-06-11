let parseToUi = (query, filterOperator = 'AND') => {
  let nodes = [];
  for (let item of query) {
    nodes = addOperator(nodes, item, filterOperator);

    if (item.hasOwnProperty('operator')) {
      nodes.push({ ...item, type: 'CONDITION' });
    } else if (item.hasOwnProperty('filterOperator')) {
      const newNodes = parseToUi(item.filterElements, item.filterOperator);
      nodes = nestIntoNodes(newNodes, nodes, item);
    }
  }
  nodes = postProcess(nodes);
  return nodes;
};

let postProcess = (nodes) => {
  const needNormalization =
    nodes.filter((node) => Array.isArray(node)).length === 1 && Array.isArray(nodes[nodes.length - 1]);

  if (needNormalization) {
    const buffer = nodes.splice(0, nodes.length - 2);
    nodes = [buffer, ...nodes];
  }

  return nodes;
};

let addOperator = (nodes, item, filterOperator) => {
  if (!nodes.length) return [];
  const nodesCopy = [...nodes];
  operator = item.filterOperator === 'EXCLUDE' ? 'EXCLUDE' : filterOperator;
  nodesCopy.push({ type: 'OPERATOR', operator });
  return nodesCopy;
};

let nestIntoNodes = (newNodes, nodes, item) => {
  const isNested = item.filterElements.length > 1 && nodes.length;
  if (isNested) {
    return [...nodes, newNodes];
  }
  return [...nodes, ...newNodes];
};
