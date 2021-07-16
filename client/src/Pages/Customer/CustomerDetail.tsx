import { FC } from "react";
import { 
    useParams
} from "react-router-dom";
const CustomerDetail: FC = props => {

    let { id }: { id: string } = useParams();

    return (
        <div>
            <h1>Customer Detail {id}</h1>
        </div>
    );
}

export default CustomerDetail;