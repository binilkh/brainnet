import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Layout from '../../components/layout';
import { fetchData, uploadFile } from './actions';
import { makeSelectToDoError,makeSelectSearchData } from './selectors';

const mapStateToProps = createStructuredSelector({
  searchDataError: makeSelectToDoError(),
  searchData: makeSelectSearchData(),
 });

 export function mapDispatchToProps(dispatch) {
  return {
    fetchData: (data) => dispatch(fetchData(data)),
    uploadFile: (data) => dispatch(uploadFile(data)),
    dispatch,
  };
}

const LayoutContainer = connect(mapStateToProps,mapDispatchToProps)(Layout);

export default LayoutContainer;