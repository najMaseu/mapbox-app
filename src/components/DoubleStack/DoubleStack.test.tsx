import DoubleStack from './DoubleStack';
import { userEvent, render, screen } from 'tests/utils';

describe('DoubleStack', () => {
  it('displays main content and secondary collapsed content', () => {
    const mainContent = 'testmainContent';
    const secondaryConent = 'testsecondaryConent';
    const mainContentCollapsed = 'testmainContentCollapsed';
    const secondaryContentCollapsed = 'testsecondaryContentCollapsed';

    render(
      <DoubleStack
        mainContent={mainContent}
        secondaryConent={secondaryConent}
        mainContentCollapsed={mainContentCollapsed}
        secondaryContentCollapsed={secondaryContentCollapsed}
      />,
    );

    expect(screen.getByText(mainContent)).toBeVisible();
    expect(screen.getByText(secondaryConent)).not.toBeVisible();
    expect(screen.getByText(mainContentCollapsed)).not.toBeVisible();
    expect(screen.getByText(secondaryContentCollapsed)).toBeVisible();
  });

  it('displays main content collapsed and secondary content when clicked on secondary card', () => {
    const mainContent = 'testmainContent';
    const secondaryConent = 'testsecondaryConent';
    const mainContentCollapsed = 'testmainContentCollapsed';
    const secondaryContentCollapsed = 'testsecondaryContentCollapsed';

    render(
      <DoubleStack
        mainContent={mainContent}
        secondaryConent={secondaryConent}
        mainContentCollapsed={mainContentCollapsed}
        secondaryContentCollapsed={secondaryContentCollapsed}
      />,
    );

    const secondaryCardSwitch = screen.getByRole('button');

    userEvent.click(secondaryCardSwitch);

    expect(screen.getByText(mainContent)).not.toBeVisible();
    expect(screen.getByText(secondaryConent)).toBeVisible();
    expect(screen.getByText(mainContentCollapsed)).toBeVisible();
    expect(screen.getByText(secondaryContentCollapsed)).not.toBeVisible();
  });

  it('can return to displaying main content when secondary was clicked', () => {
    const mainContent = 'testmainContent';
    const secondaryConent = 'testsecondaryConent';
    const mainContentCollapsed = 'testmainContentCollapsed';
    const secondaryContentCollapsed = 'testsecondaryContentCollapsed';

    render(
      <DoubleStack
        mainContent={mainContent}
        secondaryConent={secondaryConent}
        mainContentCollapsed={mainContentCollapsed}
        secondaryContentCollapsed={secondaryContentCollapsed}
      />,
    );

    userEvent.click(screen.getByLabelText('expand secondary'));
    userEvent.click(screen.getByLabelText('expand main'));

    expect(screen.getByText(mainContent)).toBeVisible();
    expect(screen.getByText(secondaryConent)).not.toBeVisible();
    expect(screen.getByText(mainContentCollapsed)).not.toBeVisible();
    expect(screen.getByText(secondaryContentCollapsed)).toBeVisible();
  });
});
