import{r as t,c as s,h as i,f as e,H as h,g as n}from"./p-31bdeba9.js";import{M as r,m as a}from"./p-8a252c56.js";import{g as l,c as o,i as c,a as u}from"./p-0d6b3f5b.js";const d=class{constructor(i){t(this,i),this.mxSortChange=s(this,"mxSortChange",7),this.mxRowCheck=s(this,"mxRowCheck",7),this.mxVisibleRowsChange=s(this,"mxVisibleRowsChange",7),this.mxRowMove=s(this,"mxRowMove",7),this.hasDefaultSlot=!1,this.hasSearch=!1,this.hasFilter=!1,this.showOperationsBar=!1,this.rows=[],this.columns=[],this.checkable=!1,this.checkOnRowClick=!0,this.showCheckAll=!0,this.draggableRows=!1,this.mutateOnDrag=!0,this.groupBy=null,this.hoverable=!0,this.autoWidth=!1,this.sortAscending=!0,this.paginate=!0,this.page=1,this.rowsPerPage=10,this.disableNextPage=!1,this.serverPaginate=!1,this.showProgressBar=!1,this.disablePagination=!1,this.progressValue=null,this.progressAppearDelay=0,this.operationsBarClass="",this.minWidths=new r,this.checkedRowIds=[],this.exposedMobileColumnIndex=0,this.hasActionsColumnFromSlot=!1}onMxCheck(t){const{rowId:s,checked:i}=t.detail;!i&&this.checkedRowIds.includes(s)?this.checkedRowIds=this.checkedRowIds.filter((t=>t!==s)):i&&!this.checkedRowIds.includes(s)&&(this.checkedRowIds=[...this.checkedRowIds,s]),this.mxRowCheck.emit(this.checkedRowIds)}async onMxRowDragStart(t){this.dragRowEl=t.target.closest("mx-table-row"),this.dragRowElHeight=await this.dragRowEl.getHeight(),this.dragRowElSiblings=Array.from(this.dragRowEl.parentNode.children).filter((t=>"MX-TABLE-ROW"===t.tagName)),this.dragRowElIndex=this.dragRowElSiblings.indexOf(this.dragRowEl),this.dragOverRowElIndex=this.dragRowElIndex,this.dragMoveHandler=this.onDragMove.bind(this),this.dragRowElSiblings.forEach((async s=>{(t.detail.isKeyboard||s!==this.dragRowEl)&&(await s.getChildren()).forEach((t=>{t.classList.add("transition-transform","pointer-events-none")}))})),t.detail.isKeyboard||(document.addEventListener("touchmove",this.dragMoveHandler),document.addEventListener("mousemove",this.dragMoveHandler))}async onDragKeyDown(t){let s;const i=t.detail;if(["ArrowUp","ArrowLeft"].includes(i)&&(s=-1),["ArrowDown","ArrowRight"].includes(i)&&(s=1),!s)return;if(-1===s&&0===this.dragOverRowElIndex)return;if(1===s&&this.dragOverRowElIndex===this.dragRowElSiblings.length-1)return;this.dragOverRowElIndex+=s;let e=0,h=this.dragOverRowElIndex;for(;h!==this.dragRowElIndex;){const t=this.dragOverRowElIndex>this.dragRowElIndex?1:-1;e+=await this.dragRowElSiblings[h].getHeight()*t,h-=t}this.dragRowEl.translateRow(0,e),this.dragOverRowEl=this.dragRowElSiblings[this.dragOverRowElIndex],this.onDragMove()}async onMxRowDragEnd(t){document.removeEventListener("mousemove",this.dragMoveHandler),document.removeEventListener("touchmove",this.dragMoveHandler),t.detail.isCancel||this.dragOverRowElIndex===this.dragRowElIndex||(this.rows&&this.mutateOnDrag&&this.reorderRowsArray(),t.detail.isKeyboard&&requestAnimationFrame((()=>{Array.from(this.dragRowEl.parentNode.children).filter((t=>"MX-TABLE-ROW"===t.tagName))[this.dragOverRowElIndex].focusDragHandle()}))),requestAnimationFrame((()=>{this.dragRowElSiblings.forEach((async t=>{(await t.getChildren()).forEach((t=>{t.classList.remove("transition-transform","pointer-events-none"),t.style.transform=""}))}))})),document.body.style.cursor="",this.rows&&this.mutateOnDrag&&await new Promise(requestAnimationFrame),this.mxRowMove.emit({rowId:this.dragRowEl.rowId,oldIndex:null==this.dragRowEl.rowIndex?this.dragRowElIndex:this.dragRowEl.rowIndex,newIndex:null==this.dragOverRowEl.rowIndex?this.dragOverRowElIndex:this.dragOverRowEl.rowIndex}),this.dragRowElIndex=null}onVisibleRowsChange(){this.getTableRows().forEach((t=>t.collapse(!0))),this.mxVisibleRowsChange.emit(this.visibleRows)}onPageChange(){this.element.getBoundingClientRect().top<0&&this.element.scrollIntoView()}resetPage(){this.serverPaginate||(this.page=1)}async getCheckedRowIds(){return this.checkedRowIds}async setCheckedRowIds(t=[]){this.checkedRowIds=t}async checkAll(){this.checkedRowIds=this.getRowId?this.rows.map(this.getRowId).map((t=>t.toString())):this.getTableRows().map((t=>t.rowId))}async checkNone(){this.checkedRowIds=[]}getTableRows(){return Array.from(this.element.querySelectorAll("mx-table-row"))}onCheckAllClick(t){t.preventDefault(),t.stopPropagation(),0===this.checkedRowIds.length?this.checkAll():this.checkNone(),this.mxRowCheck.emit(this.checkedRowIds)}onDragMove(t){requestAnimationFrame((()=>{null!=this.dragRowEl&&this.dragRowElSiblings.forEach((async(s,i)=>{const e=await s.getChildren(),{top:h}=l(e[0]),{bottom:n}=l(e[e.length-1]);if(t){const{pageY:e}=u(t);e>=h&&e<=n&&(this.dragOverRowEl=s,this.dragOverRowElIndex=i)}s!==this.dragRowEl&&e.forEach(i<=this.dragOverRowElIndex&&i>this.dragRowElIndex?t=>t.style.transform=`translateY(-${this.dragRowElHeight}px)`:i>=this.dragOverRowElIndex&&i<this.dragRowElIndex?t=>t.style.transform=`translateY(${this.dragRowElHeight}px)`:t=>t.style.transform="")}))}))}async reorderRowsArray(){const t=[];if(null!=this.dragRowEl.rowIndex&&t.push(this.dragRowEl.rowIndex),t.push(...await this.dragRowEl.getNestedRowIndexes()),t.length){const s=this.groupedRows.slice();t.reverse();let i=this.dragOverRowEl.rowIndex;if(null==i){const s=await this.dragOverRowEl.getNestedRowIndexes(),e=t[0]<s[0];i=e?s[s.length-1]:s[0],e&&t.reverse()}t.map((t=>this.groupedRows[t])).forEach((t=>{s.splice(s.indexOf(t),1),s.splice(i,0,t)})),this.rows=s}}setCellProps(){this.getTableRows().forEach((t=>{if(t.subheader)return;const s=t.querySelectorAll("mx-table-cell");let i=0;s.forEach((t=>{t.columnIndex=i,t.isExposedMobileColumn=i===this.exposedMobileColumnIndex,t.heading=this.cols[i].heading,t.classList.add(...this.getAlignClasses(this.cols[i])),this.cols[i].cellClass&&t.classList.add(this.cols[i].cellClass),i===this.cols.length-1?i=0:i++}))}))}getRowGroup(t){return null==t[this.groupBy]?null:t[this.groupBy]}setRowsChecked(){this.getTableRows().forEach((t=>t.checked=this.checkedRowIds.includes(t.rowId)))}connectedCallback(){a.subscribeComponent(this)}componentWillLoad(){this.hasDefaultSlot=Array.from(this.element.children).some((t=>!t.getAttribute("slot")))}componentWillRender(){this.hasFilter=!!this.element.querySelector('[slot="filter"]'),this.hasSearch=!!this.element.querySelector('[slot="search"]'),this.showOperationsBar=!!this.getMultiRowActions||this.hasFilter||this.hasSearch,this.hasActionsColumnFromSlot=this.hasDefaultSlot&&this.getTableRows().some((t=>t.actions&&t.actions.length)),this.setLastRowClass(),requestAnimationFrame(this.setCellProps.bind(this))}componentDidRender(){this.actionMenu&&!this.actionMenu.anchorEl&&(this.actionMenu.anchorEl=this.actionMenuButton),this.checkable&&this.setRowsChecked()}componentDidLoad(){this.onVisibleRowsChange()}disconnectedCallback(){a.unsubscribeComponent(this)}get cols(){return!this.columns.length&&this.rows.length?Object.keys(this.rows[0]).map((t=>({property:t,heading:o(t),sortable:!0}))):this.columns.map((t=>Object.assign(Object.assign({},t),{sortable:!1!==t.sortable})))}get exposedMobileColumn(){return this.cols[this.exposedMobileColumnIndex]||{}}get uniqueGroups(){if(!this.groupBy||!this.rows.length)return[];const t=this.rows.map((t=>this.getRowGroup(t)));return[...new Set(t)]}get groupedRows(){if(!this.groupBy)return this.rows;const t=[];return this.uniqueGroups.forEach((s=>{const i=this.rows.filter((t=>null==t[this.groupBy]&&null===s||t[this.groupBy]===s));t.push(...i)})),t}get visibleRows(){if(this.serverPaginate||!this.paginate&&!this.sortBy)return this.groupedRows;const t=(this.page-1)*this.rowsPerPage;let s=this.groupedRows.slice();return this.sortBy&&this.sortRows(s),s=s.slice(t,t+this.rowsPerPage),s}get visibleGroups(){return[...new Set(this.visibleRows.map((t=>this.getRowGroup(t))))]}get allRowsChecked(){return 0!==this.checkedRowIds.length&&(this.rows&&this.rows.length?this.rows.length===this.checkedRowIds.length:!!this.hasDefaultSlot&&this.getTableRows().length===this.checkedRowIds.length)}get someRowsChecked(){return 0!==this.checkedRowIds.length&&(this.rows&&this.rows.length?this.checkedRowIds.length<this.rows.length:!!this.hasDefaultSlot&&this.checkedRowIds.length<this.getTableRows().length)}get multiRowActions(){return this.getMultiRowActions?this.getMultiRowActions(this.checkedRowIds):[]}get hasActionsColumn(){return!!this.getRowActions||this.hasActionsColumnFromSlot}get operationsBarStyle(){return this.minWidths.sm?{gridTemplateColumns:"max-content 1fr max-content"}:this.checkable&&this.showCheckAll?{gridTemplateColumns:"minmax(0, max-content) 1fr"}:{gridTemplateColumns:"1fr"}}get searchStyle(){return this.minWidths.sm?{minWidth:"240px",gridColumnStart:"-1"}:this.checkable&&this.showCheckAll?{width:"100%",gridColumnStart:"2"}:{width:"100%",gridColumnStart:"1"}}get gridStyle(){return this.minWidths.sm?{display:this.autoWidth?"inline-grid":"grid",gridTemplateColumns:`repeat(${this.cols.length+(this.hasActionsColumn?1:0)}, minmax(0, auto))`}:{display:"flex",flexDirection:"column"}}get emptyStateClass(){let t="empty-state";return(this.rows.length>0||this.getTableRows().length>0)&&(t+=" hidden"),t}get navigableColumnIndexes(){return this.cols.map(((t,s)=>t.isActionColumn?null:s)).filter((t=>null!==t))}get isPreviousColumnDisabled(){return this.navigableColumnIndexes[0]===this.exposedMobileColumnIndex}get isNextColumnDisabled(){return this.navigableColumnIndexes[this.navigableColumnIndexes.length-1]===this.exposedMobileColumnIndex}sortRows(t){const s=this.cols.find((t=>t.property===this.sortBy));if(!s)return;let i=s.sortCompare;i||(i=(t,i)=>{const e=this.getCellSortableValue(t,s),h=this.getCellSortableValue(i,s);return"number"==typeof e&&"number"==typeof h?e-h:e.localeCompare(h)}),t.sort(i),this.sortAscending||t.reverse()}getCellSortableValue(t,s){if(s.getValue)return s.getValue(t);const i=t[s.property];return["date","dateTime"].includes(s.type)||c(i)?-new Date(i).getTime():"boolean"===s.type?i?1:0:i}getCellValue(t,s,i){if(s.getValue)return s.getValue(t,i);const e=t[s.property];return"date"===s.type||c(e)?new Date(e).toLocaleDateString():"dateTime"===s.type||c(e)?new Date(e).toLocaleString():"boolean"===s.type?e?"Yes":"":e}getHeaderClass(t,s){if(!t)return"";let i="flex items-center subtitle2 py-18 "+this.getAlignClasses(t).join(" ");return i+=this.minWidths.sm?" px-16":" flex-1",this.minWidths.sm&&0===s&&(i+=" space-x-16"),!this.minWidths.sm&&s===this.exposedMobileColumnIndex&&this.checkable&&this.showCheckAll&&!this.showOperationsBar&&(i+=" px-16"),!this.draggableRows&&t.sortable&&t.property&&(i+=" group cursor-pointer"),t.headerClass&&(i+=t.headerClass),i}getHeaderArrowClass(t){let s="inline-flex items-center ml-8 transform scale-75";return t.property!==this.sortBy?s+=" opacity-30 sm:opacity-0 sm:group-hover:opacity-30 rotate-180":this.sortAscending&&(s+=" rotate-180"),s}getAlignClasses(t){let s=[];t.isActionColumn||s.push("justify-start");let i,e=t.align||("number"===t.type?"right":"left");return"right"===e?i="justify-end":"center"===e&&(i="justify-center"),i&&!t.isActionColumn&&(i="sm:"+i),i&&s.push(i),s}getRowJsx(t,s){return i("mx-table-row",{"row-id":this.getRowId?this.getRowId(t):null,"row-index":s,actions:this.getRowActions?this.getRowActions(t):void 0},this.cols.map((e=>i("mx-table-cell",null,i("div",{innerHTML:this.getCellValue(t,e,s)})))))}onHeaderClick(t){!this.draggableRows&&t&&t.sortable&&t.property&&(this.sortBy!==t.property?(this.sortBy=t.property,this.sortAscending=!0):this.sortAscending?this.sortAscending=!1:(this.sortBy=null,this.sortAscending=!0),this.mxSortChange.emit({sortBy:this.sortBy,sortAscending:this.sortAscending}))}async changeExposedColumnIndex(t){if(this.isPreviousColumnDisabled&&-1===t)return;if(this.isNextColumnDisabled&&1===t)return;const s=this.navigableColumnIndexes.indexOf(this.exposedMobileColumnIndex);this.exposedMobileColumnIndex=this.navigableColumnIndexes[s+t],await new Promise(requestAnimationFrame),this.element.querySelectorAll("mx-table-row").forEach(e)}onMxPageChange(t){this.serverPaginate||(this.page=t.detail.page,this.rowsPerPage=t.detail.rowsPerPage)}setLastRowClass(){if(this.paginate)return;const t=this.getTableRows().filter((t=>"true"!==t.getAttribute("aria-hidden")));t.forEach(((s,i)=>{s.classList[i===t.length-1?"add":"remove"]("last-row")}))}render(){const t=this.checkable&&this.showCheckAll&&i("mx-checkbox",{checked:this.allRowsChecked,class:this.showOperationsBar?"ml-24":"pr-4",indeterminate:this.someRowsChecked,onClick:this.onCheckAllClick.bind(this),"label-name":"Select all rows","data-testid":"check-all-checkbox","hide-label":!0});let s;this.checkable&&this.multiRowActions.length&&(s=1===this.multiRowActions.length?i("mx-button",Object.assign({"data-testid":"multi-action-button","btn-type":"outlined"},this.multiRowActions[0],{class:"whitespace-nowrap"+(this.checkedRowIds.length?"":" invisible"),"aria-hidden":0===this.checkedRowIds.length?"true":null}),this.multiRowActions[0].value):i("span",{class:this.checkedRowIds.length?null:"invisible","aria-hidden":0===this.checkedRowIds.length?"true":null},i("mx-button",{ref:t=>this.actionMenuButton=t,"btn-type":"text",dropdown:!0},i("span",{class:"h-full flex items-center px-2"},i("i",{class:"mds-gear text-icon"}),i("span",{class:"sr-only"},"Action Menu"))),i("mx-menu",{"data-testid":"multi-action-menu",ref:t=>this.actionMenu=t},this.multiRowActions.map((t=>i("mx-menu-item",Object.assign({},t),t.value))))));const e=i("div",{class:["grid gap-x-16 gap-y-12 pb-12",this.operationsBarClass].join(" "),style:this.operationsBarStyle},this.checkable&&this.showCheckAll&&i("div",{class:"col-start-1 flex items-center min-h-36 space-x-16"},t,s),this.hasFilter&&i("div",{class:"flex items-center flex-wrap row-start-2 col-span-full sm:row-start-auto sm:col-span-1"},i("slot",{name:"filter"})),this.hasSearch&&i("div",{class:"justify-self-end",style:this.searchStyle},i("slot",{name:"search"})));let n=[];return this.hasDefaultSlot||this.groupBy||!this.groupedRows.length?!this.hasDefaultSlot&&this.groupBy&&(n=this.visibleGroups.map((t=>{const s=this.getGroupByHeading?this.getGroupByHeading(t):t;return i("mx-table-row",{subheader:!0,key:t},i("mx-table-cell",null,s),this.visibleRows.filter((s=>this.getRowGroup(s)===t)).map((t=>{const s=this.groupedRows.indexOf(t);return this.getRowJsx(t,s)})))}))):n=this.visibleRows.map((t=>{const s=this.rows.indexOf(t);return this.getRowJsx(t,s)})),i(h,{class:"mx-table block text-4"+(this.hoverable?" hoverable":"")},this.showOperationsBar&&e,i("div",{"data-testid":"grid",role:"grid",class:"table-grid relative",style:this.gridStyle},i("div",{class:"header-row",role:"row"},this.minWidths.sm?this.cols.map(((s,e)=>i("div",{id:`column-header-${e}`,role:"columnheader",class:this.getHeaderClass(s,e),onClick:this.onHeaderClick.bind(this,s)},0===e&&this.minWidths.sm&&!this.showOperationsBar&&t,i("div",{class:"inline-flex items-center overflow-hidden whitespace-nowrap select-none"},s.heading&&i("span",{class:"truncate flex-shrink",innerHTML:s.heading}),!s.heading&&i("span",{class:"sr-only"},s.isActionColumn?"Action":s.property),!this.draggableRows&&s.sortable&&s.property&&i("div",{class:this.getHeaderArrowClass(s),"data-testid":"arrow"},i("i",{class:"mds-arrow-triangle-down text-icon"})))))):i("div",{class:"flex items-stretch"},!this.showOperationsBar&&t,i("div",{id:`column-header-${this.exposedMobileColumnIndex}`,role:"columnheader",class:this.getHeaderClass(this.exposedMobileColumn,this.exposedMobileColumnIndex),onClick:this.onHeaderClick.bind(this,this.exposedMobileColumn)},i("div",{class:"inline-flex items-center overflow-hidden whitespace-nowrap select-none"},i("span",{class:"truncate flex-shrink",innerHTML:this.exposedMobileColumn.heading}),!this.draggableRows&&this.exposedMobileColumn.sortable&&this.exposedMobileColumn.property&&i("div",{class:this.getHeaderArrowClass(this.exposedMobileColumn),"data-testid":"arrow"},i("i",{class:"mds-arrow-triangle-down text-icon"})))),this.columns.length>=2&&i("div",{class:"flex items-center"},i("mx-icon-button",{"data-testid":"previous-column-button",chevronLeft:!0,disabled:this.isPreviousColumnDisabled,onClick:this.changeExposedColumnIndex.bind(this,-1)}),i("mx-icon-button",{"data-testid":"next-column-button",chevronRight:!0,disabled:this.isNextColumnDisabled,onClick:this.changeExposedColumnIndex.bind(this,1)}))),this.minWidths.sm&&this.hasActionsColumn&&i("div",null)),this.showProgressBar&&i("div",null,i("div",{class:"block h-0 col-span-full"},i("mx-linear-progress",{class:"transform -translate-y-1/2",value:this.progressValue,"appear-delay":this.progressAppearDelay}))),i("slot",null),!this.hasDefaultSlot&&i("div",null,n),i("div",{"data-testid":"empty-state",class:this.emptyStateClass},i("div",{class:"col-span-full p-16 text-4"},i("slot",{name:"empty-state"},i("span",null,"No results found.")))),this.paginate&&i("div",{class:"pagination-row"},i("mx-pagination",{page:this.page,"rows-per-page":this.rowsPerPage,rowsPerPageOptions:this.rowsPerPageOptions,"total-rows":this.serverPaginate?this.totalRows:this.rows.length,class:"col-span-full p-0 rounded-b-2xl",onMxPageChange:this.onMxPageChange.bind(this),disabled:this.disablePagination,disableNextPage:this.disableNextPage}))))}get element(){return n(this)}static get watchers(){return{sortBy:["onVisibleRowsChange","resetPage"],sortAscending:["onVisibleRowsChange","resetPage"],page:["onVisibleRowsChange","onPageChange"],rowsPerPage:["onVisibleRowsChange","resetPage"],rows:["onVisibleRowsChange","resetPage"]}}};export{d as mx_table}