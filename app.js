const app = Vue.createApp({
    // template: '<h2>Template</h2>'

    data() {
        return {
            message: "Hello, World!",
            click_count : 0,
            mouse_event: "None",
            mouse_pos : { x : 0, y : 0 },
            users : ["John", "Peter", "Tyler"],
            url : "https://kernel.org"
        };
    },

    methods: {
        updateMessage() {
            this.click_count++;
            this.message = `You have clicked the button ${this.click_count} time(s)`;
        },

        updateMouseEvent(e, arg) {
            this.mouse_event = e.type;
            if (arg != undefined) {
                console.log(`Received argument: ${arg}`);
                if (arg == "Moved") {
                    this.mouse_pos.x = e.offsetX;
                    this.mouse_pos.y = e.offsetY;
                }
            }
        }
    },

    // computed properties: like data properties, but they are computed first
    computed: {
        filteredUsers() {
            return this.users.filter((user) => user.length == 5);
        }
    }
});

app.mount("#app");

