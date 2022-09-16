import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button test cases', () => {
  it('Render check', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <Button onClick={onClick}>REGISTER NOW</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  /*
  it('Check onClick callback', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>REGISTER NOW</Button>);

    const element = screen.getByRole('button');
    userEvent.click(element);
    expect(onClick).toHaveBeenCalled();
  });*/
});
