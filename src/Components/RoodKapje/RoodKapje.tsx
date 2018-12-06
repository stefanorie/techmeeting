import * as React from 'react';

interface IProps {
    kleurKapje: string;
    className?: string;
    key?: string;
    onClick?: () => void;
}

export default function RoodKapje(props: IProps) {
    return (
        <svg
            key={props.key}
            id='Layer_1'
            x='0px'
            y='0px'
            width='864px'
            height='864px'
            viewBox='0 0 864 864'
            className={props.className}
            onClick={props.onClick}
        >
            <path fillRule='evenodd' clipRule='evenodd' d='M531.072,500.797c5.328,5.628,9.565,10.396,14.108,14.851
                c18.437,18.081,30.089,40.002,34.48,65.196c9.932,56.966,32.471,109.441,56.336,161.449c3.956,8.62,2.953,13.516-4.892,18.77
                c-32.284,21.616-67.3,35.501-106.127,39.295c-13.559,1.325-15.3-0.689-11.905-13.846c0.618-2.399,0.883-4.891,1.979-11.178
                c-49.921,41.841-99.578,42.453-150.806,6.141c-0.472,4.04-1.146,5.897-0.81,7.551c2.393,11.749,1.131,13.875-10.301,12.832
                c-39.716-3.622-76.231-16.377-109.255-38.993c-5.94-4.067-7.559-8.357-4.414-14.895c26.193-54.441,45.585-111.093,57.771-170.4
                c5.83-28.375,21.197-52.163,44.109-70.571c1.654-1.329,2.949-3.102,3.582-6.767c-8.379,1.679-16.715,3.634-25.149,4.967
                c-10.023,1.582-20.123,3.55-30.203,3.63c-8.777,0.069-11.238,6.171-15.68,11.345c-5.121,5.966-6.58,10.21-1.681,17.776
                c6.267,9.68,3.725,20.462-3.398,29.35c-4.132,5.155-5.082,9.646-2.873,16.129c4.373,12.834,6.808,26.048,1.614,39.501
                c-7.687,19.91-33.547,30.17-52.489,20.319c-2.826-1.47-4.634-4.895-6.913-7.415c2.409-1.351,4.7-3.012,7.25-3.993
                c7.356-2.831,7.883-5.211,1.27-10.311c-5.226-4.03-6.046-7.413-0.228-11.409c6.87-4.719,9.346-11.513,9.23-19.62
                c-0.037-2.585,0.225-5.371,1.171-7.739c3.475-8.703,3.622-16.405,0.59-26.079c-2.506-7.996,2.475-18.338,4.683-30.684
                c-6.098-10.258-16.649-17.232-34.024-18.43c-25.587-1.763-50.546-9.199-70.156-27.734c-20.678-19.546-26.392-43.648-21.436-71.185
                c9.017-50.097,29.417-96.043,51.877-141.064c29.869-59.873,64.986-116.546,109.08-167.17c30.92-35.499,66.665-64.479,112.974-77.644
                c60.401-17.169,116.438-4.805,169.26,26.425c46.996,27.785,81.597,67.646,109.817,113.761
                c35.753,58.427,67.706,118.757,90.897,183.306c7.405,20.607,12.188,42.236,17.062,63.649c5.103,22.416-3.012,41.588-18.238,57.698
                c-21.624,22.878-49.86,32.927-80.038,36.403c-13.593,1.566-22.592,6.817-28.917,17.812c-1.446,2.513-1.789,7.186-0.398,9.539
                c5.906,9.997,6.686,19.704,0.919,29.878c-0.789,1.392-2.12,3.781-1.605,4.414c9.959,12.259,0.325,32.612,17.324,42.183
                c1.006,0.565,0.396,7.234-1.446,9.055c-7.262,7.181-7.403,7.421,1.699,11.127c2.497,1.017,4.543,3.144,6.795,4.761
                c-2.125,2.213-3.849,5.255-6.438,6.511c-27.322,13.251-58.645-7.775-56.937-38.106c0.203-3.59,0.307-7.482,1.742-10.651
                c5.461-12.048,6.327-22.207-4.175-33.18c-6.975-7.286-2.815-17.729,2.737-25.553c3.364-4.739,2.155-7.306-0.531-11.955
                c-6.387-11.062-15.33-14.507-27.552-14.726c-11.08-0.198-22.11-2.843-33.18-4.28C536.901,500.539,534.493,500.797,531.072,500.797z'
            />
            <g>
                <path fillRule='evenodd' clipRule='evenodd' fill='#F5E0CD' d='M440.967,646.636c-2.59,4.01-4.569,10.425-8.539,12.088
                    c-2.816,1.179-8.917-3.407-12.447-6.629c-3.258-2.975-5.179-7.483-7.456-11.449c-7.443-12.965-14.401-26.229-22.35-38.872
                    c-3.052-4.854-2.833-7.094,1.784-10.18c16.948-11.327,16.944-11.476,26.388,6.392c6.135,11.605,12.161,23.272,17.951,35.053
                    C438.134,636.771,439.054,640.954,440.967,646.636z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#F5E0CD' d='M450.728,660.091c-2.264-13.146-4.122-23.216-5.64-33.336
                    c-0.317-2.114,0.101-4.682,1.068-6.59c5.479-10.803,11.355-21.404,16.834-32.207c2.694-5.312,6.056-6.498,10.942-3.017
                    c0.267,0.19,0.537,0.379,0.82,0.542c15.715,9.08,15.188,8.723,5.328,23.322c-6.315,9.352-10.612,20.045-16.155,29.945
                    C460.065,645.647,455.627,652.22,450.728,660.091z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#F5E0CD' d='M641.554,354.191c-3.555-9.185-7.163-18.392-11.556-27.185
                    c-1.547-3.095-5.131-5.899-8.431-7.229c-5.729-2.31-12.038-3.129-17.971-4.994c-31.337-9.847-60.677-23.443-85.25-45.89
                    c-2.02-1.844-4.305-3.397-6.467-5.085c-0.925,0.593-1.85,1.186-2.774,1.778c2.528,10.728,5.056,21.454,7.585,32.182
                    c1.938,8.213-0.173,10.908-8.706,10.27c-3.888-0.291-7.775-1.309-11.541-2.411c-19.438-5.693-35.956-16.316-49.194-31.442
                    c-6.631-7.576-10.85-7.633-17.85-0.262c-18.712,19.702-43.508,27.494-69.264,32.698c-2.137,0.432-5.891-0.389-6.691-1.841
                    c-0.957-1.736,0.073-4.927,0.954-7.214c0.926-2.405,3.007-4.351,4.033-6.734c3.198-7.428,6.134-14.969,9.171-22.465
                    c-1.138-0.633-2.276-1.265-3.414-1.898c-5.155,4.292-10.118,8.839-15.494,12.831c-28.139,20.889-60.138,33.486-93.423,43.358
                    c-3.606,1.07-7.747,2.771-10.018,5.519c-14.285,17.295-15.311,34.111-2.785,52.974c31.236,47.043,75.368,76.546,130.151,86.983
                    c62.515,11.91,124.364,7.004,183.68-18.603c29.552-12.758,55.279-30.578,74.714-56.338
                    C639.447,382.015,647.534,369.646,641.554,354.191z M352,401.5c-0.343,0-0.68-0.025-1.017-0.051
                    c-0.526,0.551-1.049,1.098-1.571,1.644c-0.604-0.821-1.288-1.633-1.997-2.44c-4.914-1.855-8.415-6.589-8.415-12.152
                    c0-7.18,5.82-13,13-13s13,5.82,13,13S359.18,401.5,352,401.5z M437.868,443.731c-12.06,1.112-18.843-5.883-24.469-14.701
                    c-1.173-1.84-3.399-6.03-0.167-7.659c1.767-0.371,4.877,1.443,6.463,3.021c14.138,14.06,19.654,14.357,35.816,1.846
                    c2.732-2.114,6.005-3.53,9.027-5.27C467,422,467,422,466.612,424.264C460.373,435.344,451.51,442.473,437.868,443.731z
                    M523.66,401.467c-0.049,0.061-0.101,0.122-0.148,0.184c-0.052-0.056-0.104-0.112-0.154-0.168c-0.12,0.003-0.236,0.018-0.357,0.018
                    c-7.18,0-13-5.82-13-13s5.82-13,13-13c0.352,0,0.696,0.025,1.041,0.053c0.382-0.395,0.763-0.789,1.143-1.183
                    c0.339,0.52,0.715,1.042,1.111,1.567c5.581,1.46,9.705,6.523,9.705,12.562C536,395.457,530.531,401.121,523.66,401.467z'/>
            </g>
            <g>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M617.232,310.57c-13.033-4.537-25.59-8.036-37.416-13.205
                    c-25.124-10.984-48.908-24.195-66.846-45.847c-5.047-6.09-10.354-4.544-10.628,2.614c-0.404,10.535,1.499,21.187,2.787,31.744
                    c0.456,3.752,1.981,7.376,3.888,14.138c-9.577-3.068-17.825-3.848-23.732-7.976c-13.874-9.698-27.183-20.401-39.603-31.903
                    c-6.164-5.709-9.544-6.391-14.834,0.139c-14.413,17.792-34.008,27.499-55.311,34.262c-2.281,0.724-4.867,0.492-7.199,0.694
                    c2.558-12.408,5.332-23.802,7.039-35.356c0.538-3.638-1.786-7.7-2.798-11.567c-3.054,2.138-6.489,3.89-9.102,6.475
                    c-25.085,24.821-55.454,40.652-88.325,52.258c-6.117,2.16-12.352,3.986-19.517,6.282c0-2.846-0.658-4.978,0.095-6.312
                    c23.821-42.183,53.288-79.702,97.19-102.065c64.785-33,127.761-26.214,187.177,14.583c31.622,21.715,55.635,50.836,76.345,82.808
                    c0.691,1.068,1.17,2.312,1.542,3.536C618.151,306.424,617.814,307.131,617.232,310.57z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M228.499,373.242c2.688,3.658,4.099,5.74,5.669,7.691
                    c12.495,15.522,24.557,31.431,37.712,46.373c7.751,8.805,9.164,12.408,2.857,26.489c-3.724,8.314-8.79,13.757-19.639,12.495
                    c-22.994-2.675-35.547-14.898-35.287-38.462c0.161-14.644,2.522-29.281,4.292-43.873
                    C224.49,380.779,226.566,377.809,228.499,373.242z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M649.331,383.689c3.596,22.948,5.312,44.714-2.521,65.947
                    c-5.089,13.792-8.02,13.655-22.563,13.703c-13.9,0.045-22.593-5.258-27.24-17.589c-1.013-2.686-0.512-8.028,1.328-9.381
                    c18.998-13.979,34.891-30.664,47.046-50.905C645.771,384.816,647.029,384.689,649.331,383.689z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M250.646,476.386c12.712,0.229,21.099,9.081,20.813,21.971
                    c-0.311,14.071-10.295,25.858-21.896,25.85c-11.576-0.008-21.985-11.975-21.552-24.775
                    C228.468,485.842,237.981,476.158,250.646,476.386z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M599.224,496.236c0.085-11.648,7.239-21.475,15.691-21.553
                    c19.252-0.178,27.969,6.541,27.676,21.332c-0.277,14.062-10.297,24.903-22.741,24.608
                    C608.726,520.36,599.129,509.013,599.224,496.236z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M643.033,633.197c-18.263,3.92-33.854-8.042-33.811-27.114
                    c0.021-9.226,2.66-18.948,6.416-27.426c1.596-3.601,8.99-5.729,13.968-6.199c2.016-0.19,5.55,5.53,6.718,9.108
                    c1.494,4.574,0.713,9.862,1.997,14.545c1.188,4.327,3.808,8.26,6.13,13.056C630.516,615.93,642.375,624.999,643.033,633.197z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M228.166,637.222c4.948-19.159,4.948-19.159,0.231-23.191
                    c1.913-8.985,2.944-17.347,5.623-25.143c1.704-4.96,5.034-11.744,9.086-12.991c7.239-2.227,13.289,2.542,14.992,10.516
                    c1.636,7.654,3.95,15.464,3.753,23.148C261.389,627.535,245.976,639.944,228.166,637.222z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M267.031,548.725c-0.051,9.856-7.812,18.472-16.744,18.59
                    c-8.69,0.113-15.696-7.347-15.715-16.733c-0.019-9.15,8.24-18.189,16.311-17.853C258.63,533.051,267.069,541.41,267.031,548.725z'
                    />
                <path fillRule='evenodd' clipRule='evenodd' fill='#FFFAC0' d='M620.258,530.06c8.479-0.084,16.938,8.53,16.822,17.133
                    c-0.101,7.479-9.871,17.666-17.013,17.737c-8.142,0.08-15.924-8.839-15.805-18.117C604.371,538.225,612.091,530.141,620.258,530.06
                    z'/>
            </g>
            <g>
                <path fillRule='evenodd' clipRule='evenodd' fill='#A8916D' d='M358.273,708.155c3.623,2.769,7.624,5.162,10.795,8.374
                    c8.772,8.884,11.061,9.02,20.435,1.433c2.221-1.797,5.992-3.293,8.599-2.753c27.73,5.741,55.479,4.957,83.349,1.427
                    c2.509-0.317,6.036,0.793,7.816,2.538c5.992,5.877,10.892,4.013,16.264-0.77c3.947-3.514,8.401-6.456,14.794-11.291
                    c0,9.115-0.575,15.186,0.096,21.114c3.752,33.163-16.301,49.371-42.771,61.669c-38.564,17.916-73.444,9.351-106.696-13.598
                    c-8.815-6.083-13.029-14.122-13.312-24.877c-0.36-13.692-1.521-27.363-2.336-41.044
                    C356.294,709.637,357.283,708.896,358.273,708.155z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#A8916D' d='M439.768,686.008c7.857-0.003,15.715,0.004,23.572-0.005
                    c8.237-0.01,17.393,8.34,16.811,16.333c-0.148,2.042-3.971,5.304-6.28,5.462c-15.918,1.097-31.881,1.916-47.833,1.99
                    c-7.791,0.036-15.608-1.603-23.381-2.706c-5.712-0.811-7.021-3.925-4.279-9.019c3.862-7.172,7.903-13.309,17.85-12.222
                    C423.987,686.69,431.915,686.012,439.768,686.008z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#A8916D' d='M495.698,712.489c-2.459-4.156-5.005-8.264-7.357-12.479
                    c-6.816-12.211-13.793-24.343-20.143-36.794c-1.436-2.812-0.584-6.791-0.786-10.233c3.024,0.729,6.917,0.508,8.929,2.346
                    c11.643,10.643,23.506,21.505,24.85,38.638c0.453,5.803-0.904,11.748-1.434,17.627
                    C498.404,711.893,497.051,712.191,495.698,712.489z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#A8916D' d='M378.564,714.235c-7.569-10.781-4.923-21.316,0.005-29.582
                    c6.577-11.031,15.958-20.429,24.511-30.197c1.07-1.222,5.256-1.395,6.525-0.316c1.454,1.232,2.467,5.076,1.6,6.629
                    c-9.361,16.762-19.113,33.305-28.828,49.867C381.773,711.664,380.591,712.354,378.564,714.235z'/>
            </g>
            <g>
                <path style={{ fill: props.kleurKapje, transition: 'fill .5s ease' }} fillRule='evenodd' clipRule='evenodd' d='M438.953,176.208c-63.412-0.033-112.627,25.68-151.895,71.368
                    c-37.098,43.164-61.939,92.875-73.737,148.557c-3.938,18.585-4.956,38.031,4.432,55.947c2.546,4.86,5.975,9.524,9.928,13.306
                    c4.113,3.934,4.98,6.366,1.091,11.348c-3.893,4.985-5.505,11.688-8.89,17.16c-1.729,2.796-5.197,6.527-7.801,6.467
                    c-27.423-0.64-53.503-6.392-75.79-23.562c-23.876-18.395-27.825-43.123-21.76-70.837c13.571-62.005,40.583-118.526,71.333-173.423
                    c30.129-53.786,64.385-104.736,108.262-148.466c29.735-29.636,64.697-50.172,106.626-57.793
                    c44.027-8.002,85.588-0.333,125.396,18.923c48.649,23.535,86.509,59.268,115.685,104.301
                    c44.069,68.021,82.585,138.942,108.187,216.171c5.44,16.411,9.093,33.631,11.533,50.769c3.059,21.486-7.372,38.261-23.381,51.497
                    c-22.911,18.944-50.161,26.608-79.265,28.854c-1.288,0.1-3.567,0.266-3.758-0.227c-3.568-9.258-6.89-18.61-10.263-27.943
                    c19.529-24.764,18.072-53.973,12.023-81.281c-19.521-88.134-67.705-155.773-150.267-196.045
                    C484.845,180.665,461.141,176.489,438.953,176.208z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#BE1E2D' d='M520.799,791.848c13.965-86.215,15.565-170.644-15.897-254.238
                    c-0.113,0.139,0.5-1.093,1.491-1.761c14.838-9.998,14.655-10.134-0.035-21.193c-13.229-9.958-25.972-20.562-38.93-30.882
                    c0.286-0.896,0.572-1.793,0.859-2.689c2.229-0.195,4.917-1.297,6.616-0.44c12.851,6.479,26.056,12.488,38.118,20.247
                    c33.087,21.281,53.611,50.849,60.401,90.435c8.055,46.952,27.207,90.385,46.251,133.705c1.718,3.908,3.451,7.81,5.292,11.66
                    c7.248,15.15,7.225,15.075-7.407,23.827c-25.646,15.34-53.079,25.839-82.589,30.773c-3.236,0.541-6.502,0.955-9.771,1.229
                    C523.975,792.622,522.703,792.16,520.799,791.848z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#BE1E2D' d='M400.585,488.623c-6.363,5.872-12.696,11.78-19.103,17.604
                    c-3.159,2.87-6.422,5.63-9.698,8.366c-14.114,11.788-14.067,13.287,0.457,21.967c-4.688,13.214-10.345,26.082-13.817,39.515
                    c-11.515,44.552-15.034,90.008-12.034,135.838c1.562,23.869,4.855,47.626,7.351,71.435c0.955,9.12-1.126,11.404-10.18,9.958
                    c-32.464-5.188-62.866-15.938-90.711-33.719c-6.221-3.973-7.314-7.824-4.061-14.566c24.759-51.32,43.835-104.445,55.717-160.469
                    c10.347-48.79,42.812-79.938,88.967-97.271c1.722-0.647,3.666-0.705,5.507-1.038C399.513,487.037,400.049,487.83,400.585,488.623z'
                    />
                <path style={{ fill: props.kleurKapje, transition: 'fill .5s ease' }} fillRule='evenodd' clipRule='evenodd' fill='#BE1E2D' d='M383.875,479.801c-9.967,2.762-16.932,5.032-24.05,6.601
                    c-21.707,4.784-43.421,9.562-65.241,13.778c-8.072,1.56-12.091-1.152-15.903-10.556c-4.991-12.313-4.368-21,3.238-30.912
                    c3.38-4.407,5.144-10.055,7.642-15.139c5.174,2.725,10.465,5.249,15.502,8.207c21.739,12.764,44.961,21.287,69.929,25.016
                    C377.018,477.1,378.942,478.104,383.875,479.801z'/>
                <path style={{ fill: props.kleurKapje, transition: 'fill .5s ease' }} fillRule='evenodd' clipRule='evenodd' fill='#BE1E2D' d='M491.677,478.693c15.396-4.104,27.986-6.516,39.868-10.862
                    c15.695-5.743,31.062-12.532,46.104-19.835c6.265-3.042,8.229-1.435,12.55,3.379c10.023,11.168,9.94,20.322,2.829,33.847
                    c-5.174,9.841-9.531,13.412-19.445,11.62c-24.212-4.377-48.426-8.752-72.602-13.322
                    C498.634,483.075,496.543,481.274,491.677,478.693z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#BE1E2D' d='M413.84,490.142c4.268,8.572,8.075,15.702,11.314,23.082
                    c0.811,1.847,0.71,5.409-0.517,6.623c-8.951,8.862-38.029,13.546-47.918,3.789C389.436,512.161,402.091,500.743,413.84,490.142z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#BE1E2D' d='M463.264,493.223c13.138,10.224,26.809,20.86,40.858,31.794
                    c-13.719,7.712-41.619,4.343-50.516-5.813c-1.268-1.447-0.935-5.324,0.011-7.485C456.149,505.93,459.415,500.463,463.264,493.223z'
                    />
                <path fillRule='evenodd' clipRule='evenodd' fill='#BE1E2D' d='M450.41,497.136c-1.18,7.141-5.155,11.656-12.484,11.495
                    c-7-0.155-10.968-4.727-10.749-11.57c0.229-7.077,4.479-12.215,11.675-12.2C446.067,484.876,449.807,489.947,450.41,497.136z'/>
            </g>
            <g>
                <path fillRule='evenodd' clipRule='evenodd' fill='#1C75BC' d='M354.066,683.534c2.152-27.046,4.304-54.092,6.557-82.407
                    c8.448,1.588,16.375,0.694,19.806,4.2c8.113,8.292,14.591,18.377,20.556,28.434c1.387,2.339-0.922,8.239-3.23,11.155
                    c-8.71,11.003-17.875,21.681-27.405,31.984c-3.334,3.604-8.216,5.777-12.391,8.604
                    C356.662,684.848,355.363,684.191,354.066,683.534z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#1C75BC' d='M519.906,656.975c0.288,5.898,0.354,11.819,0.923,17.69
                    c0.672,6.918-2.743,8.44-8.229,6.144c-3.153-1.32-6.148-3.681-8.447-6.258c-8.477-9.498-16.334-19.562-25.032-28.842
                    c-4.413-4.708-6.6-9.208-2.897-14.773c5.979-8.991,11.575-18.501,19.046-26.111c3.16-3.221,10.734-3.029,16.147-2.572
                    c1.677,0.142,3.662,6.169,4.107,9.679c1.9,14.965,3.277,29.995,4.845,45.002C520.215,656.946,520.061,656.961,519.906,656.975z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#1C75BC' d='M460.388,533.878c-3.938,9.603-7.84,17.914-10.639,26.581
                    c-1.008,3.123-0.648,9.043,1.305,10.336c6.497,4.301,5.466,8.228,2.311,13.912c-4.865,8.762-8.925,17.97-14.904,30.223
                    c-5.399-9.719-9.592-16.706-13.231-23.97c-3.743-7.473-8.814-15.146,0.555-22.637c1.144-0.914,0.812-4.309,0.388-6.396
                    c-0.58-2.858-1.839-5.591-2.916-8.335c-7.092-18.081-4.99-23.02,13.294-30.042c1.868-0.717,4.662-0.639,6.419,0.26
                    C448.74,526.761,454.232,530.261,460.388,533.878z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#1C75BC' d='M363.609,583.178c6.483-13.769,11.745-28.315,19.861-41.042
                    c5.824-9.131,22.223-5.214,26.751,4.973c8.084,18.182,8,18.036-8.98,27.821c-8.204,4.728-15.879,10.37-24.065,15.133
                    C370.602,593.889,366.021,591.281,363.609,583.178z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#1C75BC' d='M473.861,540.046c18.627-4.982,24.357,7.104,29.275,19.827
                    c2.583,6.68,4.9,13.574,6.218,20.582c0.55,2.924-1.107,7.009-3.149,9.359c-1.026,1.181-5.646,0.486-7.811-0.778
                    c-11.568-6.759-22.8-14.091-34.306-20.96c-4.963-2.963-5.746-6.65-3.432-11.542c2.235-4.727,4.049-9.708,6.794-14.113
                    c1.411-2.267,4.448-3.521,6.75-5.232C474.088,538.142,473.975,539.093,473.861,540.046z'/>
                <path fillRule='evenodd' clipRule='evenodd' fill='#1C75BC' d='M413.31,674.928c7.23-7.503,40.796-7.269,49.826,0
                    C446.161,674.928,430.698,674.928,413.31,674.928z'/>
            </g>
        </svg>
    );
}
