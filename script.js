

const { createApp } = Vue

createApp({
    data() {
        return {
            count: 0,
            wealth: [],
        }
    },

    methods: {
        increase() {
            this.count++
            this.wealth.push(this.random_number())
        },

        decrease() {
            if (this.count > 0) {
                this.count--
                this.wealth.pop()
            }
        },

        random_number() {
            return Math.floor(Math.random() * 10)
        },

        find_max_sum() {
            let arr = this.wealth
            let N = arr.length
            // Declare dp array
            let dp = new Array(N);
            for (let i = 0; i < N; i++) {
                dp[i] = new Array(2);
            }
            
            if (N == 0) {
                return 0;
            }

            if (N == 1) {
                return arr[0];
            }

            // Initialize the values in dp array
            dp[0][0] = 0;
            dp[0][1] = arr[0];

            // Loop to find the maximum possible sum
            for (let i = 1; i < N; i++) {
                dp[i][1] = dp[i - 1][0] + arr[i];
                dp[i][0] = Math.max(dp[i - 1][1],
                    dp[i - 1][0]);
            }

            // Return the maximum sum
            return Math.max(dp[N - 1][0], dp[N - 1][1]);
        }

    }

}).mount('#app')