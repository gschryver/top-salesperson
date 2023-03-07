import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            fulfilledOrders++;
        }
    }
    return fulfilledOrders
}


document.addEventListener(
    "click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {


            const [,employeeId] = itemClicked.id.split("--")


            for (const employeePrimaryKey of employees) {

                if (employeePrimaryKey.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(employeePrimaryKey)
                    
                    window.alert(`${employeePrimaryKey.name} sold ${orderCount} products`)
                }
            }
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

