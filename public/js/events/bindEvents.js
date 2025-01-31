import{FORM,CUSTOMER_LIST}from"../utils/selectors.js";import{validateCustomer}from"../modules/createCustomer.js";import{updateCustomer}from"../modules/updateCustomer.js";import{deleteCustomer}from"../modules/deleteCustomer.js";export function bindNewClientEvents(){FORM.addEventListener("submit",validateCustomer)}export function bindEditionCustomerEvents(){FORM.addEventListener("submit",updateCustomer)}export function bindDeleteEvent(){CUSTOMER_LIST.addEventListener("click",deleteCustomer)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9iaW5kRXZlbnRzLmpzIl0sIm5hbWVzIjpbIkZPUk0iLCJDVVNUT01FUl9MSVNUIiwidmFsaWRhdGVDdXN0b21lciIsInVwZGF0ZUN1c3RvbWVyIiwiZGVsZXRlQ3VzdG9tZXIiLCJiaW5kTmV3Q2xpZW50RXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmRFZGl0aW9uQ3VzdG9tZXJFdmVudHMiLCJiaW5kRGVsZXRlRXZlbnQiXSwibWFwcGluZ3MiOiJPQUNTQSxLQUFNQyxrQkFBcUIsK0JBQzNCQyxxQkFBd0Isc0NBQ3hCQyxtQkFBc0Isc0NBQ3RCQyxtQkFBc0Isc0NBRXhCLFNBQVNDLHNCQUNkTCxLQUFLTSxpQkFBaUIsU0FBVUoseUJBRzNCLFNBQVNLLDRCQUNkUCxLQUFLTSxpQkFBaUIsU0FBVUgsdUJBRzNCLFNBQVNLLGtCQUNkUCxjQUFjSyxpQkFBaUIsUUFBU0YiLCJmaWxlIjoiZXZlbnRzL2JpbmRFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnRhY2lvbmVzICovXG5pbXBvcnQgeyBGT1JNLCBDVVNUT01FUl9MSVNUIH0gZnJvbSBcIi4uL3V0aWxzL3NlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVDdXN0b21lciB9IGZyb20gXCIuLi9tb2R1bGVzL2NyZWF0ZUN1c3RvbWVyLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVDdXN0b21lciB9IGZyb20gXCIuLi9tb2R1bGVzL3VwZGF0ZUN1c3RvbWVyLmpzXCI7XG5pbXBvcnQgeyBkZWxldGVDdXN0b21lciB9IGZyb20gXCIuLi9tb2R1bGVzL2RlbGV0ZUN1c3RvbWVyLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kTmV3Q2xpZW50RXZlbnRzKCkge1xuICBGT1JNLmFkZEV2ZW50TGlzdGVuZXIoYHN1Ym1pdGAsIHZhbGlkYXRlQ3VzdG9tZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZEVkaXRpb25DdXN0b21lckV2ZW50cygpIHtcbiAgRk9STS5hZGRFdmVudExpc3RlbmVyKGBzdWJtaXRgLCB1cGRhdGVDdXN0b21lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRGVsZXRlRXZlbnQoKSB7XG4gIENVU1RPTUVSX0xJU1QuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBkZWxldGVDdXN0b21lcik7XG59XG4iXX0=
