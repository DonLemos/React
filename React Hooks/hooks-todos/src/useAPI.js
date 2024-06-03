// // import { useState, useEffect } from 'react'
// // import axios from 'axios'


// // const useAPI = endpoint => {
// //     const [data, setData] = useState([])
// //     useEffect(() => {
// //         getData()
// //     }, [])
// //     const getData = async () => {
// //         const response = await axios.get(endpoint)
// //         setData(response.data)
// //     }
// //     return data;
// // }

// // export default useAPI;

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useAPI = (endpoint) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(endpoint);
//                 setData(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [endpoint]);

//     return { data, loading, error };
// };

// export default useAPI;



import { useState, useEffect } from 'react'
import axios from 'axios'

const useAPI = endpoint => {
    const [data, setData] = useState([]) // initial state empty array
    //To call data when component is mounted,
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const response = await axios.get(endpoint)
        setData(response.data)
    }
    return data;
}
export default useAPI;
