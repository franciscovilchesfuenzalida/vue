const ListPrograming = {
    name: "ListPrograming",
    template: `
    <div>
        <ul>
            <li v-for="program in language">{{ program }}</li>
        </ul>
    </div>`,
    data: function(){
        return {
            language: ["PHP","Java",".Net","Ruby","Python"]
        }
    },
}