var ask_date_config = {
  container: "#ask-date",
  //hideRootNode: true,
  connectors: { type: "step"},
  node: {HTMLclass: 'nodeExample1'},
  rootOrientation: "WEST"
},
root = {}
////////////// case1 ////////////////
case1 = {
  parent: root,
  HTMLclass: "greenNode",
  text: {
    name: "Ask.Date.Case1",
    remark: "remark \\n remark2"
  }
}
case1_con1 = {
  parent: case1,
  text: {
    name: "case1_con1",
    remark: "remark \n remark2"
  }
}
case1_con1_1 = {
  parent: case1_con1,
  text: {
    name: "case1_con1_1",
    remark: "remark \n remark2"
  }
}
case1_con1_2 = {
  parent: case1_con1,
  text: {
    name: "case1_con1_2",
    remark: "remark_ㅅㄷㄴㅅ \n remark2"
  }
}
case1_con2 = {
  parent: case1,
  text: {
    name: "case1_con2",
    remark: "remark \n remark2"
  }
}

case1_ans1 = {
  parent: case1_con1_1,
  HTMLclass: "redNode",
  text: {
    name: "Speaking_basic",
    res_ex: "동작합니다."
  }
}

case1_fall1 = {
  parent: case1_con2,
  HTMLclass: "purpleNode",
  text: {
    name: "Fallback_unqualified",
    res_ex: "지금 못해요."
  }
}
////////////// case2 ////////////////
case2 = {
  parent: root,
  HTMLclass: "greenNode",
  text: {
    name: "Ask.Date.Case2",
    remark: "remark \n remark2"
  }
}
////////////// case3 ////////////////
case3 = {
  parent: root,
  HTMLclass: "greenNode",
  text: {
    name: "Ask.Date.Case3",
    remark: "remark \n remark2"
  }
}
////////////// case4 ////////////////
case4 = {
  parent: root,
  HTMLclass: "greenNode",
  text: {
    name: "Ask.Date.Case4",
    remark: "remark \n remark2"
  }
}

ask_date_chart_config = [
  ask_date_config,
  root,
  case1,
  case1_con1,case1_con2,
  case1_con1_1,case1_con1_2,
  case1_ans1,
  case1_fall1,
  case2,
  case3,
  case4
];

var ask_date_case1_config = {
  container: "#ask-case1",
  //hideRootNode: true,
  connectors: { type: "step"},
  node: {HTMLclass: 'nodeExample1'},
  rootOrientation: "WEST"
}

var ask_date_case2_config = {
  container: "#ask-case2",
  //hideRootNode: true,
  connectors: { type: "step"},
  node: {HTMLclass: 'nodeExample1'},
  rootOrientation: "WEST"
}

var ask_date_case3_config = {
  container: "#ask-case3",
  //hideRootNode: true,
  connectors: { type: "step"},
  node: {HTMLclass: 'nodeExample1'},
  rootOrientation: "WEST"
}
var ask_date_case4_config = {
  container: "#ask-case4",
  //hideRootNode: true,
  connectors: { type: "step"},
  node: {HTMLclass: 'nodeExample1'},
  rootOrientation: "WEST"
}

ask_date_case1={HTMLclass:"greenNode",text:{name:"name",remark:"remark"}}
ask_date_case1_condition1={parent:ask_date_case1,text:{name:"name",remark:"remark"}}
ask_date_case1_condition1_1={parent:ask_date_case1_condition1,text:{name:"name"}}
ask_date_case1_condition1_2={parent:ask_date_case1_condition1,text:{name:"name"}}
ask_date_case1_condition1_3={parent:ask_date_case1_condition1,text:{name:"name"}}
ask_date_case1_condition1_1_res={parent:ask_date_case1_condition1_1,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case1_condition1_2_res={parent:ask_date_case1_condition1_2,HTMLclass:"greenNode",text:{name:"name"}}
ask_date_case1_condition1_3_res={parent:ask_date_case1_condition1_3,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case1_condition2={parent:ask_date_case1,text:{name:"name",remark:"remark"}}
ask_date_case1_condition2_res={parent:ask_date_case1_condition2,HTMLclass:"purpleNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case2={HTMLclass:"greenNode",text:{name:"name",remark:"remark"}}
ask_date_case2_condition1={parent:ask_date_case2,text:{name:"name",remark:"remark"}}
ask_date_case2_condition1_1={parent:ask_date_case2_condition1,text:{name:"name"}}
ask_date_case2_condition1_2={parent:ask_date_case2_condition1,text:{name:"name"}}
ask_date_case2_condition1_1_res={parent:ask_date_case2_condition1_1,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case2_condition1_2_res={parent:ask_date_case2_condition1_2,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case2_condition2={parent:ask_date_case2,text:{name:"name",remark:"remark"}}
ask_date_case2_condition2_res={parent:ask_date_case2_condition2,HTMLclass:"purpleNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case3={HTMLclass:"greenNode",text:{name:"name",remark:"remark"}}
ask_date_case3_condition1={parent:ask_date_case3,text:{name:"name"}}
ask_date_case3_condition1_1={parent:ask_date_case3_condition1,text:{name:"name"}}
ask_date_case3_condition1_2={parent:ask_date_case3_condition1,text:{name:"name"}}
ask_date_case3_condition1_1_res={parent:ask_date_case3_condition1_1,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case3_condition1_2_res={parent:ask_date_case3_condition1_2,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case3_condition2={parent:ask_date_case3,text:{name:"name"}}
ask_date_case3_condition2_res={parent:ask_date_case3_condition2,HTMLclass:"purpleNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case4={HTMLclass:"greenNode",text:{name:"name",remark:"remark"}}
ask_date_case4_condition1={parent:ask_date_case4,text:{name:"name"}}
ask_date_case4_condition1_1={parent:ask_date_case4_condition1,text:{name:"name"}}
ask_date_case4_condition1_2={parent:ask_date_case4_condition1,text:{name:"name"}}
ask_date_case4_condition1_1_res={parent:ask_date_case4_condition1_1,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case4_condition1_2_res={parent:ask_date_case4_condition1_2,HTMLclass:"redNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case4_condition2={parent:ask_date_case4,text:{name:"name"}}
ask_date_case4_condition2_res={parent:ask_date_case4_condition2,HTMLclass:"purpleNode",text:{name:"name",res_ex:"res_ex"}}
ask_date_case1_chart_config=[
ask_date_case1_config,
ask_date_case1,
ask_date_case1_condition1,
ask_date_case1_condition1_1,
ask_date_case1_condition1_2,
ask_date_case1_condition1_3,
ask_date_case1_condition1_1_res,
ask_date_case1_condition1_2_res,
ask_date_case1_condition1_3_res,
ask_date_case1_condition2,
ask_date_case1_condition2_res,
]
ask_date_case2_chart_config=[
ask_date_case2_config,
ask_date_case2,
ask_date_case2_condition1,
ask_date_case2_condition1_1,
ask_date_case2_condition1_2,
ask_date_case2_condition1_1_res,
ask_date_case2_condition1_2_res,
ask_date_case2_condition2,
ask_date_case2_condition2_res
]
ask_date_case3_chart_config=[
ask_date_case3_config,
ask_date_case3,
ask_date_case3_condition1,
ask_date_case3_condition1_1,
ask_date_case3_condition1_2,
ask_date_case3_condition1_1_res,
ask_date_case3_condition1_2_res,
ask_date_case3_condition2,
ask_date_case3_condition2_res
]
ask_date_case4_chart_config=[
ask_date_case4_config,
ask_date_case4,
ask_date_case4_condition1,
ask_date_case4_condition1_1,
ask_date_case4_condition1_2,
ask_date_case4_condition1_1_res,
ask_date_case4_condition1_2_res,
ask_date_case4_condition2,
ask_date_case4_condition2_res
]
