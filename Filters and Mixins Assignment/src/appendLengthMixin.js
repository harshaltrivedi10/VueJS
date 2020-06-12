export const appendLengthMixin = {
    data(){
        return {
            text: "Lets reverse this!"
        };
    },
    computed: {
        appendLengthUsingComputed() {
          return this.text + " (" + this.text.length + ")";
        }
    }
}