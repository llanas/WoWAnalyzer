import { Dummy } from 'CONTRIBUTORS';
import { shallow } from 'enzyme';

import ContributorDetails from './ContributorDetails';

describe('ContributorDetails', () => {
  it('matches snapshot', () => {
    const tree = shallow(<ContributorDetails contributorId={Dummy.nickname} />);
    expect(tree).toMatchSnapshot();
  });
});
