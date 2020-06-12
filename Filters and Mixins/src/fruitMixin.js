export const fruitMixin = {
    data() {
        return {
            fruits: ["Apple", "Mango", "Grapes", "Melon"],
            filterText: ""
        };
    },
    computed: {
        filteredFruits() {
            var filtered = new RegExp(this.filterText, "i");
                return this.fruits.filter(element => {
                    return element.match(filtered);
                });
        }        
    },
    created() {
        console.log("Created");
    }
}