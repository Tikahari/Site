import React from 'react'

const Experience = () => {
    return (
        <div class="experience-total">
            <h1 class="head"><b>Projects/Experience</b></h1>
            <p class="head-text">The following include some projects that I either found interesting or thought were time consuming enough to mention. A copy of my resume can be found at the bottom of the page.</p>
            <div>
                <div class="experience">
                    <div class="experience-ex">
                        <h3 class="experience-head">
                            <b>A Computational Model of the Islets of Langerhans</b>
                        </h3>
                        <ul>
                            <li> I made a computational model of pancreatic islets (endocrine cells responsible for regulating blood glucose) using University of Florida's supercomputer, <a href="https://www.rc.ufl.edu/services/hipergator/" target="_blank">HiPerGator</a></li>
                            <li>The mathematical model involved Hodgkin-Huxley style differential equations representing the temporal dynamics of ion channel permeabilities and their relationship to the potential across the membrane of the cell</li>
                            <li>The project also involved the development of a supervised learning algorithm (an evolutionary algorithm </li>
                            <li>The program itself was written in python and relied considerably on the C and C++ libraries provided by the <a href="https://www.neuron.yale.edu/neuron/" target="_blank">NEURON framework</a></li>
                            <li> <mark>Supervisor</mark>: Damon Lamb, dlamb@va.ufl.edu</li>
                            <li> <mark>Github</mark>: <a href="https://github.com/Tikahari/Model-of-Pancreatic-Islets" target="_blank" rel="noopener noreferrer">https://github.com/Tikahari/Model-of-Pancreatic-Islets</a></li>
                            <li><a href="A-Computational-Model-of-the-Islets-of-Langerhans.pdf" download><button onclick="model_paper()">Download Paper</button></a></li>
                        </ul>
                    </div>
                    <div class="experience-ex">
                        <h3 class="experience-head">
                            <b>UF Neurosurgery Patient Education Application</b>
                        </h3>
                        <ul>
                            <li> I Worked under the guidance of the UF Department of Neurosurgery and College of Medicine to lead a team of 3 undergraduates in the development of a combined mobile and web application which allowed patients and physicians to process, visualize, and interact with MRI data </li>
                            <li> The mobile component of the app was written for iOS (physicians at UF Shand's Health are requried to carry iPhones while on call) while the web component was developed using django</li>
                            <li> <mark>Supervisor</mark>: Frank Bova, bova@neurosurgery.ufl.edu</li>
                            <li> <mark>Github</mark>: <a href="https://github.com/Tikahari/NSG-Patient-Anatomy-App" target="_blank">https://github.com/Tikahari/NSG-Patient-Anatomy-App</a></li>
                        </ul>
                    </div>
                    <div class="experience-ex">
                        <h3 class="experience-head">
                            <b>Simple Network Simulator</b>
                        </h3>
                        <ul>
                            <li> I worked on a network simulator that provided the scoring function of a reinforcement learning algorithm which predicted the optimal placement of nodes in a given
                                topology</li>
                            <li> The project involved two parts: a program
                                which implemented a random forest classifier to determine whether
                                physiological data (heart rate, heart rate variability, temperature,
                                etc.) indicated the onset of a cardiac arrest, and a program which
                                predicted the placement of (network) nodes that facilitated the most effective responses</li>
                            <li><mark>Github</mark>: <a href="https://github.com/Tikahari/Simple-Network-Simulator" target="_blank">https://github.com/Tikahari/Simple-Network-Simulator</a></li>
                        </ul>
                    </div>
                    <div class="experience-ex">
                        <h3 class="experience-head">
                            <b>Protein Folding</b>
                        </h3>
                        <ul>
                            <li> I simulated protein folding in 2D and optimized for number of hydrophobic contact points using a genetic algorithm</li>
                            <li><mark>Github</mark>: <a href="https://github.com/Tikahari/Protein-Folding" target="_blank">https://github.com/Tikahari/Protein-Folding</a> </li>
                        </ul>
                    </div>
                    <div class="experience-ex">
                        <h3 class="experience-head">
                            <b>FACER Lock</b>
                        </h3>
                        <ul>
                            <li> I worked with a team of 3 developers on a react.js application for a Gainesville-based start-up specializing in facial recognition locks </li>
                            <li> I was responsible for the backend (models, views, controllers), payment processing, and routing</li>
                            <li> <mark>Github</mark>: <a href="https://github.com/Tikahari/FaceR-Web" target="_blank" rel="noopener noreferrer">https://github.com/Tikahari/FaceR-Web</a></li>
                            <li> <mark>Deployment</mark>: <a href="https://facerlock.herokuapp.com" target="_blank">https://facerlock.herokuapp.com</a></li>
                        </ul>
                    </div>
                    <div class="experience-ex">
                        <h3 class="experience-head">
                            <b>This Site</b>
                        </h3>
                        <ul>
                            <li> This site is a simple Node.js app using an express router serving static html files linked to a pair of css and javascript files</li>
                            <li> <mark>Github</mark>: <a href="https://github.com/Tikahari/Site" target="_blank" rel="noopener noreferrer">https://github.com/Tikahari/Site</a></li>
                        </ul>
                    </div>
                </div>
                <div class="resume">
                    <h3>
                        <b>Resume</b>
                    </h3>
                    <button class='resume-pdf' onclick="resume()">View</button>
                    <div id='resume-frame'></div>
                </div>
            </div>
        </div>
    )
};

export default Experience