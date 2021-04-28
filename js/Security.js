class Security {

    constructor(){

        this.input = createInput("").attribute("placeholder", "Answer Here");
        this.button = createButton('Check');
        this.input2 = createInput("").attribute("placeholder", "Answer Here");
        this.button2 = createButton('Check');
        this.input3 = createInput("").attribute("placeholder", "Answer Here");
        this.button3 = createButton('Check');
    }

    display(){

        this.input.position(100,80)
        this.button.position(275,80)
        this.input2.position(100,280)
        this.button2.position(275,280)
        this.input3.position(700,180)
        this.button3.position(875,180)

        if (score === 3){
            this.input.hide()
            this.input2.hide()
            this.input3.hide()
        }




        this.button.mousePressed(()=>{
            answer1 = this.input.value();
            console.log(answer1)

            if(answer1 === "VARIABLE"){
                console.log("BOIIIIIII")
                score = score + 1
                this.button.hide()
            }

        })

        this.button2.mousePressed(()=>{
            answer2 = this.input2.value();
            console.log(answer2)
            if(answer2 === "DATABASE"){
                console.log("BOIIIIIII")
                score = score + 1
                this.button2.hide()
            }

        })

        this.button3.mousePressed(()=>{
            answer3 = this.input3.value();
            console.log(answer3)
            if(answer3 === "FUNCTION"){
                console.log("BOIIIIIII")
                score = score + 1
                this.button3.hide()
            }

        })



    }
}