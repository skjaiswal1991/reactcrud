import React ,{Component} from 'react'

class Addemployee extends Component {
    constructor(props) {
        super(props);
        this.state = { id:1 }
       
    }



    inputhendler =(e)=>{
        const { name,value} = e.target
        this.setState({[name]:value})
    }

    submitFrom = (e) =>{
        e.preventDefault()
        console.log("submit state data",this.state);
        let empdata = window.localStorage.getItem("employee")
        if(empdata && empdata.length > 0){
            window.localStorage.setItem("employee",[empdata,JSON.stringify(this.state)])
         
        }    
        else
           window.localStorage.setItem("employee",[JSON.stringify(this.state)]) 

        this.props.history.push('/')   
    }
    render() { 
        return ( 

            <form onSubmit={this.submitFrom}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={this.inputhendler} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={this.inputhendler} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="date" name="dob" onChange={this.inputhendler} className="form-control" required/>
                </div>
                <div className="form-group">
                    <label>Photo Link</label>
                    <input type="text" name="photo" onChange={this.inputhendler} className="form-control"  required/>
                </div>
                <div className="form-group">
                    <label>Designation </label>
                    <input type="text" name="designation" onChange={this.inputhendler} className="form-control"  required/>
                </div>
                <div className="form-group">
                    <label>Experience (year)</label>
                    <input type="number" name="experience" onChange={this.inputhendler} className="form-control"  required/>
                </div>
                
                <div className="form-group">
                    <input type="submit" name="submit" className="btn btn-primery" />
                </div>
            </form>
         );
    }
}
 
export default Addemployee;