import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './tabs';
import TabItem from './tab/tab';
import TabList from './tab-list/tab-list';
import TabPanel from './tab-panel/tab-panel';

const meta: Meta<typeof Tabs> = {
  title: "Components / Tabs",
  component: Tabs,
  args: {
    children: "Beratung starten"
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs initialValue={'0'} name={'test-tabs'}>
            <TabList>
                <TabItem label='test 1' value={'0'}></TabItem>
                <TabItem label='test 2' value={'1'}></TabItem>
                <TabItem label='test 3' value={'2'}></TabItem>
            </TabList>
            <TabPanel value={'0'}>
                Tabpanel 1
            </TabPanel>
            <TabPanel value={'1'}>
                Tabpanel 2
            </TabPanel>
            <TabPanel value={'2'}>
                Tabpanel 3
            </TabPanel>
        </Tabs>
    )
};
