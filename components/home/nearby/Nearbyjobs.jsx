import { useRouter, } from "expo-router";

import {
  View,
  Text,
  TouchableOpacity,

  ActivityIndicator,
} from "react-native";

import { Stack } from "expo-router";

import styles from "./nearbyjobs.style";
import { COLORS, } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";
import { SafeAreaView } from "react-native-safe-area-context";


const Nearbyjobs = () => {

  const router = useRouter();


  const { data, isLoading, error } = useFetch("search", {
    query: "Python developer in Texas, USA",
    num_pages: "1",
  });


  return (
    <SafeAreaView>


      <View>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nearby jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data?.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={() => router.push(`job-details/${job?.job_id}`)}
              />
            ))
          )}
        </View>
      </View></SafeAreaView>
  )
}

export default Nearbyjobs

