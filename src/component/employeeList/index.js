import { initial } from 'lodash';
import React,{Component} from 'react'
import { Link } from 'react-router-dom'
class Listemployee extends Component {
    constructor(props) {
        super(props);
        this.state = { employee:[] }
    }

    componentDidMount(){
        let emp = []
        let empdata = window.localStorage.getItem("employee")
        if(empdata){
            let empd = JSON.parse(window.localStorage.getItem("employee"))
            emp.push(empd)
            this.setState({employee:emp})
        }
                
    }

    deleteemp = (id)=>{
      console.log(window.confirm("Delete"))
      if(window.confirm("Delete")){
          window.localStorage.setItem("employee",'')
      }
    }

    render() { 
        const {employee} = this.state;

        return ( 

            <div>
                <Link to={`/add`}>
                <button className="btn btn-primary">Add Amployee</button>
                </Link>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr</th>
                            <th scope="col">Images</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {employee && employee.length > 0 && employee.map((d,i)=>
                        
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <th scope="col"><img height="100" width="100" src={d.photo} /></th>
                                    <th scope="col">{d.firstname+' '+d.lastname}</th>
                                    <th scope="col">{d.dob}</th>
                                    <th scope="col">{d.designation}</th>
                                    <th scope="col">{d.experience}</th>
                                    <th scope="col">
                                        <Link to={`/edit/${d.id}`} className="btn btn-success">Edit</Link> || <Link to={`#`} onClick={()=>this.deleteemp(d.id)} className="btn btn-warning">delete</Link></th>
                                </tr>
                        )}
                        
                    </tbody>

                </table>
            </div>
         );
    }
}
 
export default Listemployee;