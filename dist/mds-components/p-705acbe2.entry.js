import{r as t,c as s,h as i,H as e,g as h}from"./p-0d0438ba.js";import{M as n,m as a}from"./p-8a252c56.js";import{c as l,i as r}from"./p-a5b0bde1.js";import{a as o}from"./p-3a6987fb.js";const c=class{constructor(i){t(this,i),this.mxSortChange=s(this,"mxSortChange",7),this.mxRowCheck=s(this,"mxRowCheck",7),this.mxVisibleRowsChange=s(this,"mxVisibleRowsChange",7),this.hasDefaultSlot=!1,this.hasSearch=!1,this.hasFilter=!1,this.showOperationsBar=!1,this.rows=[],this.columns=[],this.checkable=!1,this.checkOnRowClick=!0,this.showCheckAll=!0,this.hoverable=!0,this.autoWidth=!1,this.sortAscending=!0,this.paginate=!0,this.page=0,this.rowsPerPage=10,this.disableNextPage=!1,this.serverPaginate=!1,this.showProgressBar=!1,this.disablePagination=!1,this.progressValue=null,this.progressAppearDelay=0,this.minWidths=new n,this.checkedRowIds=[],this.exposedMobileColumnIndex=0,this.hasActionsColumnFromSlot=!1}onMxCheck(t){const{rowId:s,checked:i}=t.detail;!i&&this.checkedRowIds.includes(s)?this.checkedRowIds=this.checkedRowIds.filter((t=>t!==s)):i&&!this.checkedRowIds.includes(s)&&(this.checkedRowIds=[...this.checkedRowIds,s]),this.mxRowCheck.emit(this.checkedRowIds)}onVisibleRowsChange(){this.getTableRows().forEach((t=>t.collapse())),this.mxVisibleRowsChange.emit(this.visibleRows)}onPageChange(){this.element.getBoundingClientRect().top<0&&this.element.scrollIntoView()}resetPage(){this.serverPaginate||(this.page=0)}async getCheckedRowIds(){return this.checkedRowIds}async setCheckedRowIds(t=[]){this.checkedRowIds=t}async checkAll(){this.checkedRowIds=this.getRowId?this.rows.map(this.getRowId).map((t=>t.toString())):this.getTableRows().map((t=>t.rowId))}async checkNone(){this.checkedRowIds=[]}getTableRows(){return Array.from(this.element.querySelectorAll("mx-table-row"))}onCheckAllClick(t){t.preventDefault(),0===this.checkedRowIds.length?this.checkAll():this.checkNone()}setCellProps(){const t=this.element.querySelectorAll("mx-table-cell");let s=0;t.forEach((t=>{t.columnIndex=s,t.isExposedMobileColumn=s===this.exposedMobileColumnIndex,t.heading=this.cols[s].heading,s===this.cols.length-1?s=0:s++}))}setRowsChecked(){this.getTableRows().forEach((t=>t.checked=this.checkedRowIds.includes(t.rowId)))}connectedCallback(){a.subscribeComponent(this)}componentWillLoad(){this.hasDefaultSlot=Array.from(this.element.children).some((t=>!t.getAttribute("slot")))}componentWillRender(){this.hasFilter=!!this.element.querySelector('[slot="filter"]'),this.hasSearch=!!this.element.querySelector('[slot="search"]'),this.showOperationsBar=!!this.getMultiRowActions||this.hasFilter||this.hasSearch,this.hasActionsColumnFromSlot=this.hasDefaultSlot&&this.getTableRows().some((t=>t.actions&&t.actions.length)),requestAnimationFrame(this.setCellProps.bind(this))}componentDidRender(){this.actionMenu&&!this.actionMenu.anchorEl&&(this.actionMenu.anchorEl=this.actionMenuButton),this.checkable&&this.setRowsChecked()}componentDidLoad(){this.onVisibleRowsChange()}disconnectedCallback(){a.unsubscribeComponent(this)}get cols(){return!this.columns.length&&this.rows.length?Object.keys(this.rows[0]).map((t=>({property:t,heading:l(t),sortable:!0}))):this.columns.map((t=>Object.assign(Object.assign({},t),{sortable:!1!==t.sortable})))}get exposedMobileColumn(){return this.cols[this.exposedMobileColumnIndex]||{}}get visibleRows(){if(this.serverPaginate||!this.paginate&&!this.sortBy)return this.rows;const t=this.page*this.rowsPerPage;let s=this.rows.slice();return this.sortBy&&this.sortRows(s),s=s.slice(t,t+this.rowsPerPage),s}get allRowsChecked(){return this.rows.length&&this.rows.length===this.checkedRowIds.length}get someRowsChecked(){return this.checkedRowIds.length>0&&this.checkedRowIds.length<this.rows.length}get multiRowActions(){return this.getMultiRowActions?this.getMultiRowActions(this.checkedRowIds):[]}get hasActionsColumn(){return!!this.getRowActions||this.hasActionsColumnFromSlot}get operationsBarStyle(){return this.minWidths.sm?{gridTemplateColumns:"max-content 1fr max-content"}:this.checkable&&this.showCheckAll?{gridTemplateColumns:"minmax(0, max-content) 1fr"}:{gridTemplateColumns:"1fr"}}get searchStyle(){return this.minWidths.sm?{width:"240px",gridColumnStart:"-1"}:this.checkable&&this.showCheckAll?{width:"100%",maxWidth:"240px",gridColumnStart:"2"}:{width:"100%",gridColumnStart:"1"}}get gridStyle(){if(!this.minWidths.sm)return{display:"flex",flexDirection:"column"};let t=this.checkable?"minmax(0, min-content) ":"";return t+=`repeat(${this.cols.length+(this.hasActionsColumn?1:0)}, minmax(0, auto))`,{display:this.autoWidth?"inline-grid":"grid",gridTemplateColumns:t}}sortRows(t){const s=this.cols.find((t=>t.property===this.sortBy));if(!s)return;let i=s.sortCompare;i||(i=(t,i)=>{const e=this.getCellSortableValue(t,s),h=this.getCellSortableValue(i,s);return"number"==typeof e&&"number"==typeof h?e-h:e.localeCompare(h)}),t.sort(i),this.sortAscending||t.reverse()}getCellSortableValue(t,s){if(s.getValue)return s.getValue(t);const i=t[s.property];return["date","dateTime"].includes(s.type)||r(i)?-new Date(i).getTime():"boolean"===s.type?i?1:0:i}getCellValue(t,s,i){if(s.getValue)return s.getValue(t,i);const e=t[s.property];return"date"===s.type||r(e)?new Date(e).toLocaleDateString():"dateTime"===s.type||r(e)?new Date(e).toLocaleString():"boolean"===s.type?e?"Yes":"":e}getHeaderClass(t,s){if(!t)return"";let i="flex items-center subtitle2 py-18 "+this.getAlignClass(t);i+=this.minWidths.sm?" px-16":" flex-1";const e=this.showCheckAll&&!this.showOperationsBar;return this.minWidths.sm&&0===s&&this.checkable&&!e&&(i+=" col-span-2"),!this.minWidths.sm&&s===this.exposedMobileColumnIndex&&this.checkable&&e&&(i+=" px-16"),t.sortable&&t.property&&(i+=" group cursor-pointer"),t.headerClass&&(i+=t.headerClass),i}getHeaderArrowClass(t){let s="ml-12 transform scale-75";return t.property!==this.sortBy?s+=" opacity-30 sm:opacity-0 sm:group-hover:opacity-30 rotate-180":this.sortAscending&&(s+=" rotate-180"),s}getAlignClass(t){if(!this.minWidths.sm)return"justify-start";let s=t.align||("number"===t.type?"right":"left");return"right"===s?"justify-end":"center"===s?"justify-center":"justify-start"}onHeaderClick(t){t&&t.sortable&&t.property&&(this.sortBy!==t.property?(this.sortBy=t.property,this.sortAscending=!0):this.sortAscending?this.sortAscending=!1:(this.sortBy=null,this.sortAscending=!0),this.mxSortChange.emit({sortBy:this.sortBy,sortAscending:this.sortAscending}))}changeExposedColumnIndex(t){const s=this.exposedMobileColumnIndex+t;s<0||s>=this.cols.length||(this.exposedMobileColumnIndex=s)}onMxPageChange(t){this.serverPaginate||(this.page=t.detail.page,this.rowsPerPage=t.detail.rowsPerPage)}render(){const t=this.checkable&&this.showCheckAll&&i("mx-checkbox",{checked:this.allRowsChecked,class:this.showOperationsBar?"ml-24":"pr-4",indeterminate:this.someRowsChecked,onClick:this.onCheckAllClick.bind(this),"label-name":"Select all rows","hide-label":!0});let s;this.checkable&&(s=1===this.multiRowActions.length?i("mx-button",Object.assign({"data-testid":"multi-action-button","btn-type":"outlined"},this.multiRowActions[0],{class:"whitespace-nowrap"+(this.checkedRowIds.length?"":" hidden")}),this.multiRowActions[0].value):i("span",{class:this.checkedRowIds.length?null:"hidden"},i("mx-button",{ref:t=>this.actionMenuButton=t,"btn-type":"text",dropdown:!0},i("span",{class:"h-full flex items-center"},i("i",{class:"ph-gear text-1"}))),i("mx-menu",{"data-testid":"multi-action-menu",ref:t=>this.actionMenu=t},this.multiRowActions.map((t=>i("mx-menu-item",Object.assign({},t),t.value))))));const h=i("div",{class:"grid gap-x-16 gap-y-12 pb-12",style:this.operationsBarStyle},this.checkable&&this.showCheckAll&&i("div",{class:"col-start-1 flex items-center min-h-36 space-x-16"},t,s),this.hasFilter&&i("div",{class:"flex items-center flex-wrap row-start-2 col-span-full sm:row-start-auto sm:col-span-1"},i("slot",{name:"filter"})),this.hasSearch&&i("div",{class:"justify-self-end",style:this.searchStyle},i("slot",{name:"search"})));return i(e,{class:"mx-table block"+(this.hoverable?" hoverable":"")+(this.paginate?" paginated":"")},this.showOperationsBar&&h,i("div",{"data-testid":"grid",class:"table-grid",style:this.gridStyle},i("div",{class:"header-row"},this.minWidths.sm&&!this.showOperationsBar&&t,this.minWidths.sm?this.cols.map(((t,s)=>i("div",{id:`column-header-${s}`,role:"columnheader",class:this.getHeaderClass(t,s),onClick:this.onHeaderClick.bind(this,t)},i("div",{class:"inline-flex items-center overflow-hidden whitespace-nowrap select-none"},i("span",{class:"truncate flex-shrink",innerHTML:t.heading}),t.sortable&&t.property&&i("div",{class:this.getHeaderArrowClass(t),"data-testid":"arrow",innerHTML:o}))))):i("div",{class:"flex items-stretch"},!this.showOperationsBar&&t,i("div",{id:`column-header-${this.exposedMobileColumnIndex}`,role:"columnheader",class:this.getHeaderClass(this.exposedMobileColumn,this.exposedMobileColumnIndex),onClick:this.onHeaderClick.bind(this,this.exposedMobileColumn)},i("div",{class:"inline-flex items-center overflow-hidden whitespace-nowrap select-none"},i("span",{class:"truncate flex-shrink",innerHTML:this.exposedMobileColumn.heading}),this.exposedMobileColumn.sortable&&this.exposedMobileColumn.property&&i("div",{class:this.getHeaderArrowClass(this.exposedMobileColumn),"data-testid":"arrow",innerHTML:o}))),i("div",{class:"flex items-center"},i("mx-icon-button",{"data-testid":"previous-column-button",chevronLeft:!0,disabled:0===this.exposedMobileColumnIndex,onClick:this.changeExposedColumnIndex.bind(this,-1)}),i("mx-icon-button",{"data-testid":"next-column-button",chevronRight:!0,disabled:this.exposedMobileColumnIndex===this.cols.length-1,onClick:this.changeExposedColumnIndex.bind(this,1)}))),this.minWidths.sm&&this.hasActionsColumn&&i("div",null)),this.showProgressBar&&i("div",null,i("div",{class:"block h-0 col-span-full"},i("mx-linear-progress",{class:"transform -translate-y-1/2",value:this.progressValue,"appear-delay":this.progressAppearDelay}))),i("slot",null),!this.hasDefaultSlot&&i("div",null,this.visibleRows.map(((t,s)=>i("mx-table-row",{"row-id":this.getRowId?this.getRowId(t):null,actions:this.getRowActions?this.getRowActions(t):void 0},this.cols.map((e=>i("mx-table-cell",{class:[this.getAlignClass(e),e.cellClass].join(" ")},i("div",{innerHTML:this.getCellValue(t,e,s)})))))))),this.visibleRows&&0===this.visibleRows.length&&i("div",{class:"empty-state"},i("div",{class:"col-span-full p-16 text-4"},i("slot",{name:"empty-state"},i("span",null,"No results found.")))),this.paginate&&i("div",{class:"pagination-row"},i("mx-pagination",{page:this.page,"rows-per-page":this.rowsPerPage,rowsPerPageOptions:this.rowsPerPageOptions,"total-rows":this.serverPaginate?this.totalRows:this.rows.length,class:"col-span-full p-0 rounded-b-2xl",onMxPageChange:this.onMxPageChange.bind(this),disabled:this.disablePagination,disableNextPage:this.disableNextPage}))))}get element(){return h(this)}static get watchers(){return{sortBy:["onVisibleRowsChange","resetPage"],sortAscending:["onVisibleRowsChange","resetPage"],page:["onVisibleRowsChange","onPageChange"],rowsPerPage:["onVisibleRowsChange","resetPage"],rows:["onVisibleRowsChange","resetPage"]}}};export{c as mx_table}