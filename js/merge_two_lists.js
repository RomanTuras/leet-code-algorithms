// 21. Merge Two Sorted Lists

var mergeTwoLists = function(list1, list2) {
  if (list1.length === 0 && list2.length === 0) return []
  else if (list1.length === 0 && list2.length > 0) return list2
  else if (list1.length > 0 && list2.length === 0) return list1
  
  // let list = list1.length >= list2.length ? list1 : list2

  for (let i=0; i<list1.length; i++) {
    console.log(list1[i].value)

  }
};

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]