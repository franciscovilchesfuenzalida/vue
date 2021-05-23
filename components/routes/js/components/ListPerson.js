const ListPerson = {
    name: "ListPerson",
    template: `
    <div>
    <list-alert></list-alert>
        <ul>
            <li v-for="person in people">{{ person }}</li>
        </ul>
    </div>`,
    data: function(){
        return {
            people: ["Andrés","Juan","Daniel","Pepe","Alejandro"]
        }
    },
}