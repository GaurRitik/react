import HashLoader from 'react-spinners/HashLoader'
import PropTypes from "prop-types";

const Spinner = ({loading}) => {
    const override={
        display:"block",
        margin:"100px auto"
    }
    return (
    <>
        <HashLoader loading={loading}
            color="#6366f1"
            cssOverride={override}
        />
    </>
  )
}

Spinner.propTypes={
    loading:PropTypes.bool
}

export default Spinner