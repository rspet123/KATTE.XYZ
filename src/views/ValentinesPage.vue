<template>
    <div class="content-page">
        <h1  v-typewriter="{
            speed: 5,
            text: 'Hello Jazz, will you be my valentine?',
          }">
        </h1>
        <div class="valentines-container">
            <div class="valentines-page-0"> 
                <div class="valentines-title">

                </div>
                <div v-if="!yesClicked">  
                    <button class="valentines-button yes" @click="onYesClick">
                        Yes
                    </button>
                    <button class="valentines-button no" @click="onNoClick">
                        No
                    </button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name: "ValentinesPage",
    data() {
        return {
            noClicks: 0,
            pageNumbers: 0,
            yesClicked: false,
            textTimeout: 5000
        };
    },
    methods: {
        onNoClick() {
            // Move the no button to a random location on the screen
            this.noClicks++;
            if (this.noClicks > 0) {
                // Make valentines-title "Are you sure?"
                const title = document.querySelector('.valentines-title');
                title.innerHTML = 'Are you sure?';
                // Add an extra ? for each click
                title.innerHTML += '?'.repeat(this.noClicks);

            }
            if (this.noClicks > 4) {
                const noButton = document.querySelector('.valentines-button.no');
                noButton.style.position = 'absolute';
                noButton.style.left = `${Math.random() * 80}vw`;
                noButton.style.top = `${Math.random() * 40}vh`;
            }

            if (this.noClicks > 10) {
                const title = document.querySelector('.valentines-title');
                const noButton = document.querySelector('.valentines-button.no');
                const yesButton = document.querySelector('.valentines-button.yes');
                title.innerHTML = "Ok, I'm taking that away.";
                noButton.style.transition = 'all 5s ease';
                noButton.style.left = '-1000vw';
                noButton.style.top = '-1000vh';
                setTimeout(() => {
                    if (this.yesClicked) {
                        return;
                    }
                    title.innerHTML = "Let's try that again.";
                    this.noClicks = 0;
                }, 1000);
                setTimeout(() => {
                    if (this.yesClicked) {
                        return;
                    }
                    title.innerHTML = "OK, I'll make it reallllly easy for you.";
                    // slowly triple the size of the yes button
                    yesButton.style.transition = 'all 5s ease';
                    yesButton.style.transform = 'scale(2)';
                    // Move it to the center of the screen
                    yesButton.style.left = '50vw';
                    yesButton.style.top = '50vh';
                }, 4000);

                

            }
            
        },
        onYesClick() {
            const title = document.querySelector('.valentines-title');
            this.yesClicked = true;
            title.innerHTML = 'I was hoping you would say that!';
            setTimeout(() => {
                title.innerHTML = '♥ I love you ♥';
                setTimeout(() => {
                    title.innerHTML = 'Dinner? Characuterie board? My place? Friday?';
                    setTimeout(() => {
                        title.innerHTML = 'Say yes';
                        setTimeout(() => {
                            title.innerHTML = 'Please?';
                        }, this.textTimeout);
                    }, this.textTimeout);
                }, this.textTimeout);
            }, this.textTimeout);

        }
    }

};

</script>

<style scoped>

.valentines-button {
    
    border: none;
    background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    padding: 10px 24px;
    transition: all 0.3s ease 0s;
}

/* on Click */
.valentines-button:hover {
    background: linear-gradient(270deg, #F536EE, #F4367D, #F56436);
    box-shadow: 0 2px #666;
}

.content-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
    top: -30vh;
    background-color: white;
    z-index: 100;
    width: 110%;
    right: 5vw;
}

.valentines-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: red;
}

.flashing {
    animation: flashing 1s infinite;
}

/* Flashing anim, scale up and down */
@keyframes flashing {
    0% {
        transform: scale(2.4);
    }

    50% {
        transform: scale(2.5);
    }

    100% {
        transform: scale(2.4);
    }
}

</style>
