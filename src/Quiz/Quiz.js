import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

class Quiz extends Component {

    constructor() {
        super();

        this.state = {
            text: 'the',
            index: '',
            id: '-1'
        }
        this.engineeringQues = [{
            id: 1,
            ques: 'My decisions are based more on my feeling in the moment rather than thorough planning.',
            A: 'Strongly Agree',
            B: 'Agree',
            C: 'Disagree',
            D: 'Strongly Disagree'
        }, {
            id: 2,
            ques: 'As a rule, I go ahead with tasks only when there is a clear and detailed plan.',
            A: 'Strongly Agree',
            B: 'Agree',
            C: 'Disagree',
            D: 'Strongly Disagree'
        }, {
            id: 3,
            ques: 'I am almost never late for my appointments.',
            A: 'Strongly Agree',
            B: 'Agree',
            C: 'Disagree',
            D: 'Strongly Disagree'
        }, {
            id: 4,
            ques: ' like to work around targets, deadlines and routines for managing my life.',
            A: 'Strongly Agree',
            B: 'Agree',
            C: 'Disagree',
            D: 'Strongly Disagree'
        }, {
            id: 5,
            ques: '',
            A: 'I  consinder deadline to be relative and flexible',
            B: 'Agree',
            C: 'Disagree',
            D: 'Strongly Disagree'
        }]

        this.onSelect = this.onSelect.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this)
    }

    showResult(result) {
        Actions.result(result);
    }

    onSelect(index, value, id) {
        this.setState({
            index: [this.state.index, index],
            text: [this.state.text, value],
            id: [this.state.id, id]
        })
    }

    submitAnswer() {
        var comNum = 0;
        var mechNum = 0;
        var civilNum = 0;
        var elecNum = 0;
        var result = [];
        const answer = this.state.text;

        const second = answer.toString().split(',');
        for (j = 0; j < second.length; j++) {
            if (second[j] === "Computer") {
                comNum += 1;
            } else if (second[j] === "Electrical") {
                elecNum += 1;
            } else if (second[j] === "Mechanical") {
                mechNum += 1;
            } else if (second[j] === "Civil") {
                civilNum += 1;
            }
        }

        if (elecNum < comNum && civilNum < comNum && mechNum < comNum) {
            return 'computer';
        } else if (elecNum < civilNum && comNum < civilNum && mechNum < civilNum) {
            return 'civil';
        } else if (comNum < elecNum && mechNum < elecNum && civilNum < elecNum) {
            return 'electrical';
        } else if (elecNum < mechNum && comNum < mechNum && civilNum < mechNum) {
            return 'mechanical';
        } else { return null }


    }

    render() {
            var fieldId = this.props.sentId;
            return ( <
                    View style = { styles.container } > {
                        fieldId == 1 ? < Text style = { styles.title } > ENGINEERING < /Text>: null } {
                            fieldId == 2 ? < Text style = { styles.title } > AGRICULTURE < /Text>: null } {
                                fieldId == 3 ? < Text style = { styles.title } > BUSINESS < /Text>: null } <
                                    ScrollView keyboardDismissMode = 'on-drag' > {
                                        fieldId == 1 ?
                                        this.engineeringQues.map((item, key) => ( <
                                            View key = { key }
                                            style = { styles.quizBox } >
                                            <
                                            Text style = { styles.question } > { item.ques } <
                                            /Text> <
                                            RadioGroup onSelect = {
                                                (index, value, id) => this.onSelect(index, value, item.id) } >
                                            <
                                            RadioButton value = { 'Computer' } >
                                            <
                                            Text > Always < /Text> <
                                            /RadioButton>

                                            <
                                            RadioButton value = { 'Electrical' } >
                                            <
                                            Text > Often < /Text> <
                                            /RadioButton>

                                            <
                                            RadioButton value = { 'Mechnical' } >
                                            <
                                            Text > Seldom < /Text> <
                                            /RadioButton> <
                                            RadioButton value = { item.D } >
                                            <
                                            Text > Never < /Text> <
                                            /RadioButton> <
                                            /RadioGroup> <
                                            /View>
                                        )) :
                                            null
                                    }

                                <
                                /ScrollView> <
                                TouchableOpacity
                                style = { styles.button }
                                onPress = {
                                        () => this.showResult({ result: this.submitAnswer() }) } >
                                    <
                                    Text style = {
                                        { color: "#fff", alignSelf: 'center', justifyContent: 'center' } } > Submit < /Text> <
                                    /TouchableOpacity> <
                                    /View>
                            );
                        }
                    }

                    export default Quiz;

                    const styles = StyleSheet.create({
                        container: {
                            flex: 1,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                        },
                        quizBox: {
                            backgroundColor: '#ccc',
                            padding: 10,
                            marginVertical: 30,
                            height: 250,
                            width: 350,
                        },
                        title: {
                            alignItems: 'center',
                            alignSelf: 'center',
                            fontSize: 25,
                            color: '#012C3D',
                            marginTop: 50,
                        },
                        question: {
                            alignItems: 'center',
                            alignSelf: 'center',
                            fontSize: 18,
                            color: '#fff',
                            marginTop: 20,
                        },
                        button: {
                            backgroundColor: '#012C3D',
                            padding: 10,
                            marginHorizontal: 80,
                            width: 500,
                        },
                    });