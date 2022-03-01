class Validate {
    type= ""
    constructor(type) {
        this.type = type
    }
    validateField(data) {
        switch (this.type) {
            case "name":
                if (!data) {
                    return false
                }
                return true
            case "phone":
                let patternIsDigits = /^[0-9]*$/gm
                let patternCheckPhone = /^[0-9]{11}$/
                if(data.match(patternCheckPhone) && data.match(patternIsDigits)){
                    return true
                }
                return false
            case "email":
                let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if(data.toLowerCase().match(pattern)){
                    return true
                }
                return false
        }


        return true
    }
}

export default Validate