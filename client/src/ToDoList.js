import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";

// let endpoint = "http://localhost:9000"

const ToDoList = () => {
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    

    const inputRef = useRef(null)

    useEffect(() => {
        document.getElementById("startbtn").click();
    }, []);

    const endpoint = "http://localhost:9000"

    const onChange = (event) => {
        setTask(event.target.value);
    };


    const handleInputClick = () => {
        inputRef.current.focus();
        setTask("");
    };

    const handleInputClickButton = () => {
        inputRef.current.focus();
        inputRef.current.value = "";
    };

    const onSubmit = () => {
        if (task) {
            axios.post(endpoint + "/api/tasks/" + count, 
            { task },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",                },
            })
            .then((res) => {
                getTask();
                setTask("");
                console.log(res);
            });

            setCount(count + 1);
            setTask("");
        }
    }

    const mapp = (item) => {
        let color = "yellow"
        let style = {
            wordWrap: "break-word",
        };
        if (item.status) {
            style["textDecorationLine"] = "line-through";
            color = "green";
        }
        console.log(item.task)
        return (
            <Card key={item._id} color={color} colourThickness='50' fluid className="rough">
                <Card.Content>
                    <Card.Header textAlign="left">
                        <div style={style}>{item.task}</div>
                    </Card.Header>
                        <Icon 
                            name="check circle"
                            color="blue"
                            onClick={() => updateTask(item._id)}
                        />
                        <span style={{paddingRight: 10}}>Complete</span>
                        <Icon 
                            name="undo"
                            color="green"
                            onClick={() => undoTask(item._id)}
                        />
                        <span style={{paddingRight: 10}}>Undo</span>
                        <Icon 
                            name="delete"
                            color="red"
                            onClick={() => deleteTask(item._id)}
                        />
                        <span style={{paddingRight: 10}}>Delete</span>
                    <Card.Meta textAlign="right">

                    </Card.Meta>
                </Card.Content>
            </Card>
        )
    }

    const getTask = () => {
        axios.get(endpoint + "/api/task").then((res) => {
            let origData = res.data;
            if (origData != null) {
                let jsonData = JSON.parse(origData.split('\n')[0]);
                if (jsonData) {
                    setItems(
                        jsonData.map(mapp)
                    );
                } else {
                    setItems([]);
                }
            } else {
                setItems([]);
            }
            
        })
    }

    const updateTask = (id) => {
        axios.put(endpoint + "/api/taskComplete/" + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then((res) => {
            console.log(res);
            getTask();
        });
    }

    const undoTask = (id) => {
        axios.put(endpoint + "/api/undoTask/" + id, {
            headers: {
                "Countent-Type": "application/x-www-form-urlencoded",
            },
        }).then((res) => {
            console.log(res);
            getTask();
        });
    }

    const deleteTask = (id) => {
        axios.delete(endpoint + "/api/deleteTask/" + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then((res) => {
            console.log(res);
            getTask();
        });
    }

    const getAll = () => {
        axios.get(endpoint + "/api/task", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then((res) => {
            // console.log(res);
            getTask();
        });
    }

    const deleteAll = () => {
        axios.delete(endpoint + "/api/deleteAllTasks", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then((res) => {
            console.log(res);
            getTask();
        });
    }

    return (
        <div>
            <div className="row">
                <Header className="header" as="h2" color="brown">
                    TO DO LIST
                </Header>
            </div>
            <div className="overControl">
                <Button onClick={getAll} color="black" id="startbtn">
                    Get existed tasks!
                </Button>
                <Button onClick={deleteAll} color="red">
                    Delete all tasks!
                </Button>
            </div>
            <div className="row">
                <Form onSubmit={onSubmit}>
                    <Input 
                    type="text"
                    name="task"
                    fluid
                    onChange={onChange}
                    placeholder="Insert a task"
                    autoComplete="on"
                    ref={inputRef}
                    value={task}
                    onClick={handleInputClick}
                    />
                    <Button onClick={handleInputClickButton}>
                        Create Task!
                    </Button>
                </Form>
                
            </div>
            <div className="row">
                <Card.Group>{items}</Card.Group>
            </div>
        </div>
    )

}



export default ToDoList

