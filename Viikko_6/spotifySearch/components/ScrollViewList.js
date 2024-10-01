import { StyleSheet, ScrollView, Text, View} from 'react-native';;
import ItemDisplay from './ItemDisplay';

export default function ScrollViewList({data, loading, err}) {

    return (
            <>
                {loading && <Text style={styles.info}>Loading...</Text>}
                {err && <Text style={[styles.info, styles.error]}>Error fetching data</Text>}
                <ScrollView style={styles.scroll}>
                        {data && data.artists && data.artists.items && data.artists.items.map((artist, index) => {
                        const name = artist.name
                        const image_url = artist.images.length > 0 ? artist.images[0].url : null
                        const genres = artist.genres
                        return <ItemDisplay key={index} image_url={image_url} name={name} genres={genres} />
                        })}
                </ScrollView>
            </>
    );
}

const styles = StyleSheet.create({
    scroll: {
        width: '100%',
        marginTop: 20,
    },
    info: {
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        top: 100,
        left: 10,
        right: 10,
        textAlign: 'center',
        zIndex: 1,
    },
    error: {
        color: 'red',
    },
});
