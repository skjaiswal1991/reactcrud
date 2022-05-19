import React ,{Component} from 'react'

class Editemployee extends Component {
    constructor(props) {
        super(props);
        this.state = { id:props.match.params.id,empdata:[] }

    }
 
 componentDidMount(){
    let arrdata = []
    let empdata = JSON.parse(window.localStorage.getItem("employee"))
    arrdata.push(empdata)
    let data = arrdata.filter((d)=>d.id == this.state.id)
  
    this.setState({...data[0]})
  }
    inputhendler =(e)=>{
        const { name,value} = e.target
        this.setState({[name]:value})
    }

    submitFromUpdate = (e) =>{
        e.preventDefault()
        console.log("submit state data",this.state);

        window.localStorage.setItem("employee",JSON.stringify(this.state)) 

        this.props.history.push('/')   
    }
    render() { 

        console.log("this state data",this.state);
        const { firstname,lastname,dob,photo,designation,experience} = this.state;
        return ( 

            <form onSubmit={this.submitFromUpdate}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={this.inputhendler} value={firstname} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={this.inputhendler} value={lastname} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="date" name="dob" onChange={this.inputhendler} value={dob} className="form-control" required/>
                </div>
                <div className="form-group">
                    <label>Photo Link</label>
                    <input type="text" name="photo" onChange={this.inputhendler} value={photo} className="form-control"  required/>
                </div>
                <div className="form-group">
                    <label>Designation </label>
                    <input type="text" name="designation" onChange={this.inputhendler} value={designation} className="form-control"  required/>
                </div>
                <div className="form-group">
                    <label>Experience (year)</label>
                    <input type="number" name="experience" onChange={this.inputhendler} value={experience} className="form-control"  required/>
                </div>
                
                <div className="form-group">
                    <input type="submit" name="submit" className="btn btn-primery" />
                </div>
            </form>
         );
    }
}
 
export default Editemployee;