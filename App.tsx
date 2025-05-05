import { View, Text } from 'react-native'
import React, { useState } from 'react';
import CustomCalender from './src/components/CustomCalender'

const App = () => {
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  return (
    <View>
      <CustomCalender onSelectDateRange={setDateRange} />

      <Text>
        {dateRange.start ? `Check-in: ${dateRange.start}` : 'No check-in date selected'}
      </Text>
      <Text>
        {dateRange.end ? `Check-out: ${dateRange.end}` : 'No check-out date selected'}
      </Text>
    </View>
  )
}

export default App