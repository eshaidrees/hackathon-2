export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "firstName",
            title: "FirstName",
            type: "string",
        },
        {
            name: "lastName",
            title: "LastName",
            type: "string",
        },
        {
            name: "country",
            title: "Country",
            type: "string",
        },
        {
            name: "city",
            title: "City/Town",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        }
        ,{
            name: "phone",
            title: "Phone No",
            type: "string",
        },
        {
            name: "zipcode",
            title: "Zip Code",
            type: "string",
        },
        {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [{type : "reference", to : { type : "product" }}]
        },
        {
            name: "paymentMethod",
            title: "Payment Method",
            type: "string",
            options: {
                list: [
                    { title: "Bank Transfer", value: "bankTransfer" },
                    { title: "Cash on Delivery", value: "cashOnDelivery" }
                ],
                layout: "radio"
            }
        },
        {
            name: "total",
            title: "Total",
            type: "number"
        },
        {
            name: "orderDate",
            title: "orderDate",
            type: "datetime"
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    {title: "Pending" , value: "pending"},
                    {title: "Success" , value: "success"},
                    {title: "Dispatch" , value: "dispatch"},
                ],
                layout: "radio"
            },
            initialValue: "pending"
        }

       
    ]
}