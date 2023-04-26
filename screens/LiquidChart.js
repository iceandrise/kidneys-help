import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';

import { useMemo } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { useDiaryQuery } from '../services/hooks/useDiaryQuery';

const daysOfWeek = [null, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const LiquidChart = () => {
  const { result, loading } = useDiaryQuery('Liquid');

  const formattedArray = useMemo(() => {
    let temp = [];
    if (result) {
      temp = result
        .sort((a, b) => (a.day > b.day ? 1 : -1))
        ?.filter((obj, index, self) => index === self.findIndex((o) => o.day === obj.day));
    }
    return temp;
  }, [result]);

  const diaryData = useMemo(() => {
    const temp = formattedArray.map((e) => {
      if (e?.inputParameter) {
        return Number(e.inputParameter);
      } else [0];
    });
    return temp.length ? temp : [0];
  }, [formattedArray]);

  const diaryLabels = useMemo(() => {
    const temp = formattedArray.map((e) => {
      if (e?.day) {
        return daysOfWeek[e.day];
      }
    });
    return temp;
  }, [formattedArray]);

  const limit = useMemo(
    () => ({
      min: Math.min(...diaryData) - Math.min(...diaryData) / 2,
      max: Math.max(...diaryData) + Math.max(...diaryData) / 4,
    }),
    [diaryData],
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>WeightChart</Text>
      {!loading ? (
        <LineChart
          data={{
            labels: diaryLabels,
            datasets: [
              {
                data: [...diaryData],
              },
              {
                data: [limit.min], //min graph value
                withDots: false, //a flage to make it hidden
              },
              {
                data: [limit.max], //max graph value
                withDots: false, //a flage to make it hidden
              },
            ],
          }}
          width={Dimensions.get('window').width - 16} // from react-native
          height={220}
          yAxisLabel={''}
          renderDotContent={({ x, y, indexData }) => (
            <View
              key={x}
              style={{
                position: 'absolute',
                top: y - 25,
                left: x - 8,
              }}
            >
              <Text style={{ fontSize: 10 }}>{indexData}</Text>
            </View>
          )}
          chartConfig={{
            horizontalOffset: 140,
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
