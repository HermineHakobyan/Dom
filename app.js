const data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };
  
  const container = document.getElementById("container");
  const list = document.createElement("ul");
  
  function createListItems(obj, parentList) {
    for (const key in obj) {
      const listItem = document.createElement("li");
      listItem.textContent = key;
      parentList.appendChild(listItem);
  
      if (Object.keys(obj[key]).length > 0) {
        const nestedList = document.createElement("ul");
        listItem.appendChild(nestedList);
        createListItems(obj[key], nestedList);
      }
    }
  }
  
  createListItems(data, list);
  container.appendChild(list);
  